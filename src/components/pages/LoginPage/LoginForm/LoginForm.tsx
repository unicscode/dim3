import { useForm } from "react-hook-form";
import { Button, Fieldset, TextInput } from "components/atoms";
import { Form } from "components/molecules/Form";

import styles from "./LoginForm.module.css";

export type FormInfo = {
  username: string;
  password: string;
};

type LoginProps = {
  submit: (data: FormInfo) => void;
};

export function LoginForm({ submit }: LoginProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInfo>();

  function handleFormSubmit(data: FormInfo) {
    submit(data);
  }

  return (
    <div className={styles.formWrapper}>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Fieldset>
          <legend className={styles.legend}>login to your account</legend>
          <TextInput
            type="text"
            id="username"
            label="username"
            autoComplete="username"
            {...register("username", { minLength: 3 })}
          />
          {errors.username && (
            <p className={styles.error}>
              user name must be at least 3 characters
            </p>
          )}
          <TextInput
            type="password"
            id="password"
            label="password"
            autoComplete="current-password"
            {...register("password", { required: true })}
          />
        </Fieldset>
        {errors.password && (
          <p className={styles.error}>password must be defined</p>
        )}
        <Button type="submit" className={styles.submitButton}>
          submit
        </Button>
      </Form>
    </div>
  );
}
