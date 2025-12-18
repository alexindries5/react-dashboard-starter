import { FormEvent, useState } from 'react';
import { Link, Navigate, useLocation, Location } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/auth.css';

const SignIn = () => {
  const { login, token, loading } = useAuth();
  const location = useLocation();
  const [email, setEmail] = useState('analyst@pulseboard.io');
  const [password, setPassword] = useState('pulseboard');
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState<string | null>(null);

  if (token) {
    const redirectTo = (location.state as { from?: Location })?.from?.pathname || '/';
    return <Navigate to={redirectTo} replace />;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      await login(email, password, remember);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed');
    }
  };

  return (
    <div className="auth-shell">
      <div className="auth-card">
        <div className="auth-card__header">
          <div className="pill">Pulseboard</div>
          <h1>Sign in to your workspace</h1>
          <p>Welcome back. Please enter your details to continue.</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="auth-field">
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@company.com"
              autoComplete="email"
              required
            />
          </label>
          <label className="auth-field">
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              required
              minLength={6}
            />
          </label>
          <div className="auth-form__meta">
            <label className="checkbox">
              <input type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} />
              <span>Remember me</span>
            </label>
            <Link to="/" className="link">
              Need help?
            </Link>
          </div>
          {error && <div className="auth-error">{error}</div>}
          <button type="submit" className="primary" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
          <p className="muted">
            By continuing you agree to our <span className="link">Terms</span> and <span className="link">Privacy Policy</span>.
          </p>
        </form>
      </div>
      <div className="auth-aside">
        <div>
          <p className="eyebrow">Secure Access</p>
          <h2>JWT-backed authentication</h2>
          <p className="muted">
            We issue signed tokens to keep your workspace protected. Your session is securely stored and can be revoked at any
            time.
          </p>
        </div>
        <div className="aside-card">
          <div>
            <p className="eyebrow">Activity</p>
            <p className="muted">Recent sign-ins and device approvals</p>
          </div>
          <ul>
            <li>
              <span className="dot" />
              New device approval
              <span className="chip">2m ago</span>
            </li>
            <li>
              <span className="dot" />
              Admin policy update
              <span className="chip">1h ago</span>
            </li>
            <li>
              <span className="dot" />
              MFA challenge passed
              <span className="chip">Today</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
