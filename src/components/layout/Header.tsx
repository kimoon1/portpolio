import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <ul className={styles.menu}>
          <li className={`${styles['menu-item']}`} >
            <Link href={'/'} data-text="Home">Home</Link>
          </li>
          <li className={`${styles['menu-item']}`} >
            <Link href={'/'} data-text="Portfolio">Portfolio</Link>
          </li>
          <li className={`${styles['menu-item']}`} >
            <Link href={'/'} data-text="Info">Info</Link>
          </li>
          <li className={`${styles['menu-item']}`} >
            <Link href={'/'} data-text="Etc">Etc</Link>
          </li>
        </ul>
      </header>
      <Image className={`${styles['top-right-img']}`} src={'/icon/round.svg'} width={20} height={20} alt='라운드' />
      <Image className={`${styles['bottom-left-img']}`} src={'/icon/round.svg'} width={24} height={24} alt='라운드' />
    </>
  );
}