
import styles from './Layout.module.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>

      <main>{children}</main>

    </div>
  );
}