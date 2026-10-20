import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setError(''); setLoading(true);
    const result = await login(email, password);
    if (result.success) navigate('/dashboard');
    else setError(result.error || 'Ошибка');
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4" style={{ backgroundColor: 'var(--c-coal)' }}>
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Вход</h1>
        <form onSubmit={handleSubmit} className="space-y-6 p-8" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
          {error && <p className="text-sm" style={{ color: 'var(--c-error)' }}>{error}</p>}
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={{ borderColor: 'var(--c-steel)', color: 'var(--c-parchment)' }} />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Пароль" className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={{ borderColor: 'var(--c-steel)', color: 'var(--c-parchment)' }} />
          <button type="submit" disabled={loading} className="btn-forge w-full">{loading ? 'Вход...' : 'Войти'}</button>
          <p className="text-sm text-center" style={{ color: 'var(--c-ash)' }}>Нет аккаунта? <Link to="/register" className="link-forge">Регистрация</Link></p>
        </form>
        <div className="mt-6 p-4" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-gold)' }}>
          <p className="label-gold mb-3">Демо:</p>
          <p className="text-xs font-mono" style={{ color: 'var(--c-ash)' }}>demo@tigelgorn.ru / demo123</p>
        </div>
      </div>
    </div>
  );
}
