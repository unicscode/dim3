import { Outlet } from 'react-router-dom';

import { NavBar } from '../../organisms';

import styles from './AuthRoutes.module.css';

export function AuthRoutes() {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  );
}
