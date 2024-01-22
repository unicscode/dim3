import { Outlet } from 'react-router-dom';

import styles from './MainRoutes.module.css';
import { NavBar } from '../../organisms';

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
