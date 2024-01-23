import { useState, useEffect } from "react";
import { TOKEN_KEY } from "src/constants";

type AuthHookReturnType = {
  isAuthenticated: boolean;
  token: string | null;
  checkAuthentication: () => void;
  logout: () => void;
};

export const useAuth = (): AuthHookReturnType => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);

  const checkAuthentication = () => {
    const storedToken = localStorage.getItem(TOKEN_KEY);
    if (storedToken) {
      setIsAuthenticated(true);
      setToken(storedToken);
    } else {
      setIsAuthenticated(false);
      setToken(null);
    }
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setIsAuthenticated(false);
    setToken(null);
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  return {
    isAuthenticated,
    token,
    checkAuthentication,
    logout,
  };
};
