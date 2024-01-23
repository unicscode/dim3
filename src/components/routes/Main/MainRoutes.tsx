import { Outlet } from "react-router-dom";
import { NavBar } from "components/organisms";

import styles from "./MainRoutes.module.css";

export function MainRoutes() {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}
