import React from "react";
import classNames from "classnames";

import styles from "./Button.module.css";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={classNames(styles.root, className)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
