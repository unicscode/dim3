import { useAuth } from "components/hooks";
import { ReactNode, createContext, useContext, useMemo } from "react";

type AuthenticationContextType = {
  isAuthenticated: boolean;
  token: string | null;
};

type Props = {
  children: ReactNode;
};

const AuthenticationContext = createContext<AuthenticationContextType>({
  isAuthenticated: false,
  token: null,
});

export function AuthenticationProvider({ children }: Props) {
  const { isAuthenticated, token } = useAuth();

  const contextValue = useMemo(
    () => ({ isAuthenticated, token }),
    [isAuthenticated, token]
  );
  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export const useAuthentication = () => useContext(AuthenticationContext);
