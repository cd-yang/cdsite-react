import Link from 'next/link'
import styles from './header.module.css';

export default function Header() {
  return (
    // <Affix className={styles.affixHeader}>
    <div className={styles.divHeader}>
      <Link href="/">
        <img className={styles.affixHeaderLogo} alt='logo' src="/favicon/android-chrome-192x192.png" />
      </Link>
      <Link href='/'>CD-Yang</Link>
      <Link href='/about'>关于</Link>
    </div>
    // </Affix>
  );
}
