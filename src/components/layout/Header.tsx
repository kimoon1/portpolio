import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.menu}>
        <li className={`${styles['menu-item']}`}>Home</li>
        <li className={`${styles['menu-item']}`}>Portfolio</li>
        <li className={`${styles['menu-item']}`}>Info</li>
        <li className={`${styles['menu-item']}`}>Etc</li>
      </ul>
    </header>
  );
}