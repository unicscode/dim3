import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "components/providers/Authentication";

import { FormInfo, LoginForm } from "./LoginForm/LoginForm";
import { useSignIn } from "./hooks";

export function LoginPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthentication();
  const login = useSignIn();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  function submitForm({ username, password }: FormInfo) {
    login({ username, password });
  }

  return <LoginForm submit={submitForm} />;
}
