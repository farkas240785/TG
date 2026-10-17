import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const [formData, setFormData] = useState({ email: '', password: '', name: '', company: '', role: 'architect' as const });
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setError('');
    const result = await register(formData);
    if (result.success) navigate('/dashboard');
    else setError(result.error || 'Ошибка');
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4" style={{ backgroundColor: 'var(--c-coal)' }}>
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Регистрация</h1>
        <form onSubmit={handleSubmit} className="space-y-6 p-8" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
          {error && <p className="text-sm" style={{ color: 'var(--c-error)' }}>{error}</p>}
          <input type="text" placeholder="Организация *" required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={{ borderColor: 'var(--c-steel)', color: 'var(--c-parchment)' }} />
          <input type="text" placeholder="ФИО *" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={{ borderColor: 'var(--c-steel)', color: 'var(--c-parchment)' }} />
          <input type="email" placeholder="Email *" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={{ borderColor: 'var(--c-steel)', color: 'var(--c-parchment)' }} />
          <input type="password" placeholder="Пароль *" required value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={{ borderColor: 'var(--c-steel)', color: 'var(--c-parchment)' }} />
          <button type="submit" className="btn-forge w-full">Зарегистрироваться</button>
          <p className="text-sm text-center" style={{ color: 'var(--c-ash)' }}>Есть аккаунт? <Link to="/login" className="link-forge">Войти</Link></p>
        </form>
      </div>
    </div>
  );
}
