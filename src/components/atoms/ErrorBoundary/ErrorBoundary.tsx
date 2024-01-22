import { Component } from "react";
import { t } from "i18next";

import { Button } from "components/atoms";
import { getErrorMessage } from "../../../utils/getErrorMessage";

import styles from "./ErrorBoundary.module.css";

class ErrorBoundary extends Component<
  { children?: React.ReactNode },
  { error: unknown }
> {
  state = { error: undefined };

  static getDerivedStateFromError(error: unknown) {
    return { error };
  }

  componentDidCatch(error: unknown) {
    // eslint-disable-next-line no-console
    console.error(getErrorMessage(error));
  }

  render() {
    if (this.state.error) {
      return (
        <div className={styles.errorBoundary}>
          <p className="ds-text-s">{t("error")}</p>
          <Button
            onClick={() => {
              window.location.reload();
            }}
          >
            {t("reload_page")}
          </Button>
        </div>
      );
    }
    return this.props.children;
  }
}

export { ErrorBoundary };
