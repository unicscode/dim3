import { Link } from 'react-router-dom';

import styles from './NavBar.module.css';

export function NavBar() {
  return (
    <header className={styles.header}>
      <Link to='/'>
        <img src='/logo.svg' alt='accueil' className={styles.logo} />
      </Link>
    </header>
  );
}
