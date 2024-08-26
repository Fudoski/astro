interface LoginRequest {
  username: string;
  password: string;
}

interface AuthContextProps {
  isAuthenticated: () => boolean;
}

type User = {
  authenticated: boolean;
};
