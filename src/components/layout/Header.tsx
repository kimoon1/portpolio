import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.menu}>
        <li className={`${styles['menu-item']}`}><Link href={'/'}>Home</Link></li>
        <li className={`${styles['menu-item']}`}><Link href={'/'}>Portfolio</Link></li>
        <li className={`${styles['menu-item']}`}><Link href={'/'}>Info</Link></li>
        <li className={`${styles['menu-item']}`}><Link href={'/'}>Etc</Link></li>
      </ul>
    </header>
  );
}