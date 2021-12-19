import Link from 'next/link'
import styles from './header.module.css';

export default function Header() {
  return (
    <div className="flex justify-center bg-ytbg">
      <Link href="/">
        <img className="w-8 h-8 m-2" alt='logo' src="/favicon/android-chrome-192x192.png" />
      </Link>
      <Link href='/'>
        <div className="ml-8 mt-3">CD-Yang</div>
      </Link>
      <Link href='/about'>
        <div className="ml-8 mt-3">关于</div>
      </Link>
      <Link href='/playground'>
        <div className="ml-8 mr-2 mt-3">Playground</div>
      </Link>
    </div>
  );
}
