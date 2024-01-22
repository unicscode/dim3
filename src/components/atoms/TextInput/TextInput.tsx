import React from "react";
import classNames from "classnames";

import styles from "./TextInput.module.css";

export type TextInputProps = React.ComponentPropsWithoutRef<"input"> & {
  id: string | number;
  label: string;
};

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    { id, label, className, "aria-label": ariaLabel, ...props },
    forwardedRef
  ) => {
    return (
      <div>
        {label && <label htmlFor={id}>{label}</label>}
        <input
          className={classNames(className, styles.root)}
          ref={forwardedRef}
          aria-label={ariaLabel ?? label}
          {...props}
        />
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
