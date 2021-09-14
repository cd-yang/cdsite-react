import Link from 'next/link'
import styles from './header.module.css';

export default function Header() {
  return (
    <div className="flex justify-center bg-ytbg">
      <Link href="/">
        <img className="w-8 h-8 m-2" alt='logo' src="/favicon/android-chrome-192x192.png" />
      </Link>
      <Link href='/'>
        <div className="ml-8">CD-Yang</div>
      </Link>
      <Link href='/about'>
        <div className="mx-8">关于</div>
      </Link>
    </div>
  );
}
