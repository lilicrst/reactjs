import styles from './Header.module.css';

import rocketLogo from '../assets/rocket-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="Logo do todo" />
      <h1>todo</h1>
    </ header>
  );
}