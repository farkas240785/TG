import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  company: string;
  role: 'customer' | 'architect' | 'technologist' | 'manager';
  phone?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (data: RegisterData) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

interface RegisterData {
  email: string;
  password: string;
  name: string;
  company: string;
  role: 'customer' | 'architect' | 'technologist' | 'manager';
  phone?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const MOCK_USERS = [
  { id: 'user-001', email: 'demo@tigelgorn.ru', password: 'demo123', name: 'Иванов Сергей Петрович', company: 'ООО "Реставрация-СПб"', role: 'architect' as const, phone: '+7 (812) 555-12-34' },
  { id: 'user-002', email: 'manager@tigelgorn.ru', password: 'manager123', name: 'Петров Алексей Владимирович', company: 'Тигель и Горн', role: 'manager' as const, phone: '+7 (8352) 12-34-56' },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('auth_user');
    if (stored) {
      try { setUser(JSON.parse(stored)); } catch { localStorage.removeItem('auth_user'); }
    }
  }, []);

  const login = async (email: string, password: string) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    const found = MOCK_USERS.find(u => u.email === email && u.password === password);
    if (!found) return { success: false, error: 'Неверный email или пароль' };
    const userData: User = { id: found.id, email: found.email, name: found.name, company: found.company, role: found.role, phone: found.phone };
    setUser(userData);
    localStorage.setItem('auth_user', JSON.stringify(userData));
    return { success: true };
  };

  const register = async (data: RegisterData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (!data.email || !data.password || !data.name || !data.company) return { success: false, error: 'Заполните все поля' };
    const newUser: User = { id: `user-${Date.now()}`, email: data.email, name: data.name, company: data.company, role: data.role, phone: data.phone };
    setUser(newUser);
    localStorage.setItem('auth_user', JSON.stringify(newUser));
    return { success: true };
  };

  const logout = () => { setUser(null); localStorage.removeItem('auth_user'); };

  return <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
