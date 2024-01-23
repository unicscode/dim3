import { Navigate } from "react-router-dom";
import { useAuthentication } from "components/providers/Authentication";

import { FormInfo, LoginForm } from "./LoginForm/LoginForm";

export function LoginPage() {
  const { isAuthenticated } = useAuthentication();
  function submitForm(data: FormInfo) {
    console.log(data);
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <LoginForm submit={submitForm} />;
}
