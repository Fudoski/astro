import { createContext, ReactNode, useContext, useMemo, useState } from "react";

const authContext = createContext<AuthContextProps | undefined>(undefined);

export function ProvideAuth({ children }: { children: ReactNode }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState<User>({ authenticated: false });

  const contextValue: AuthContextProps = useMemo(
    () => ({
      isAuthenticated: () => user.authenticated,
    }),
    []
  );
  return contextValue;
}
