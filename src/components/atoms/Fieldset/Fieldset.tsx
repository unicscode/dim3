import classNames from "classnames";

import styles from "./Fieldset.module.css";

type Props = React.FieldsetHTMLAttributes<HTMLFieldSetElement> & {
  appearance?: "center";
};

export function Fieldset({ children, className, appearance }: Props) {
  <fieldset className={classNames(styles.root, className)}>
    <div className={appearance && styles[appearance]}>{children}</div>
  </fieldset>;
}
