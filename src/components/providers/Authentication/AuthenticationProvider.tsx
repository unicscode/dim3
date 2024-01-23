import { useAuth } from "components/hooks";
import { ReactNode, createContext, useContext, useMemo } from "react";

type AuthenticationContextType = {
  isAuthenticated: boolean;
};

type Props = {
  children: ReactNode;
};

const AuthenticationContext = createContext<AuthenticationContextType>({
  isAuthenticated: false,
});

export function AuthenticationProvider({ children }: Props) {
  const { isAuthenticated } = useAuth();

  const contextValue = useMemo(() => ({ isAuthenticated }), [isAuthenticated]);
  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export const useAuthentication = () => useContext(AuthenticationContext);
