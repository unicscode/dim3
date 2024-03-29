import { FormEvent, PropsWithChildren } from "react";

import styles from "./Form.module.css";

type FormProps = {
  onSubmit: (event: FormEvent) => void;
};

export function Form({ children, onSubmit }: PropsWithChildren<FormProps>) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.root}>
      {children}
    </form>
  );
}
