import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('https://roast-my-code-mbfw.onrender.com/api/auth/register', { name, email, password });
      login(res.data.user, res.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0d1117', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: '12px', padding: '2rem', width: '100%', maxWidth: '400px' }}>
        <h2 style={{ color: '#ff6b35', textAlign: 'center', marginBottom: '1.5rem' }}>🔥 Register</h2>
        {error && <p style={{ color: '#ff4444', textAlign: 'center', marginBottom: '1rem' }}>{error}</p>}
        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}
          style={{ width: '100%', padding: '12px', marginBottom: '1rem', background: '#0d1117', border: '1px solid #30363d', borderRadius: '8px', color: 'white', fontSize: '14px', boxSizing: 'border-box' }} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '12px', marginBottom: '1rem', background: '#0d1117', border: '1px solid #30363d', borderRadius: '8px', color: 'white', fontSize: '14px', boxSizing: 'border-box' }} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '12px', marginBottom: '1rem', background: '#0d1117', border: '1px solid #30363d', borderRadius: '8px', color: 'white', fontSize: '14px', boxSizing: 'border-box' }} />
        <button onClick={handleSubmit} disabled={loading}
          style={{ width: '100%', padding: '12px', background: 'linear-gradient(135deg, #ff6b35, #f7931e)', border: 'none', borderRadius: '8px', color: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
          {loading ? 'Registering...' : '🔥 Create Account'}
        </button>
        <p style={{ color: '#8b949e', textAlign: 'center', marginTop: '1rem' }}>
          Already have an account? <Link to="/login" style={{ color: '#ff6b35' }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;