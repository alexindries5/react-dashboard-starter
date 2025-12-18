export type AuthResponse = {
  token: string;
  user: {
    name: string;
    email: string;
    role: string;
  };
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const createMockJwt = (payload: Record<string, unknown>): string => {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const body = btoa(JSON.stringify({ ...payload, iat: Date.now() / 1000 }));
  const signature = btoa('pulseboard-secret');
  return `${header}.${body}.${signature}`;
};

export const authenticate = async (email: string, password: string): Promise<AuthResponse> => {
  await delay(500);

  if (!email || !password) {
    throw new Error('Please enter your credentials.');
  }

  const normalizedEmail = email.trim().toLowerCase();
  const isAdmin = normalizedEmail.endsWith('@pulseboard.io') || normalizedEmail.includes('admin');

  return {
    token: createMockJwt({ sub: normalizedEmail, scope: isAdmin ? ['admin'] : ['user'] }),
    user: {
      name: normalizedEmail.split('@')[0].replace(/\./g, ' '),
      email: normalizedEmail,
      role: isAdmin ? 'Administrator' : 'Analyst',
    },
  };
};
