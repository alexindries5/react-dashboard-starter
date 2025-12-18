import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { authenticate, AuthResponse } from '../services/auth';

type AuthState = {
  token: string | null;
  user: AuthResponse['user'] | null;
  persist: boolean;
};

type AuthContextValue = {
  user: AuthResponse['user'] | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string, remember: boolean) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const AUTH_STORAGE_KEY = 'pulseboard.auth';

const readStoredAuth = (): AuthState => {
  const raw = localStorage.getItem(AUTH_STORAGE_KEY) ?? sessionStorage.getItem(AUTH_STORAGE_KEY);
  if (!raw) return { token: null, user: null, persist: true };

  try {
    const parsed = JSON.parse(raw) as Partial<AuthState>;
    return {
      token: parsed.token ?? null,
      user: parsed.user ?? null,
      persist: parsed.persist ?? true,
    };
  } catch (error) {
    console.warn('Failed to parse auth cache', error);
    return { token: null, user: null, persist: true };
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AuthState>(() => readStoredAuth());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (state.token) {
      const storage = state.persist ? localStorage : sessionStorage;
      const secondary = state.persist ? sessionStorage : localStorage;
      storage.setItem(AUTH_STORAGE_KEY, JSON.stringify(state));
      secondary.removeItem(AUTH_STORAGE_KEY);
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
      sessionStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, [state]);

  const login = async (email: string, password: string, remember: boolean) => {
    setLoading(true);
    try {
      const result = await authenticate(email, password);
      setState({ token: result.token, user: result.user, persist: remember });
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setState({ token: null, user: null, persist: true });
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
  };

  const value = useMemo(
    () => ({
      ...state,
      loading,
      login,
      logout,
    }),
    [loading, state],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
};
