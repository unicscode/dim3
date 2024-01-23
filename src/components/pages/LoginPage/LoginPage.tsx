import { FormInfo, LoginForm } from "./LoginForm/LoginForm";

export function LoginPage() {
  function submitForm(data: FormInfo) {
    console.log(data);
  }
  return <LoginForm submit={submitForm} />;
}
