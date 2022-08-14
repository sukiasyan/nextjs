import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href='/'>Home</Link>
        <Link href='/coins'>List of Coins</Link>
        <Link href='/about'>About</Link>
        <Link href='/profile'>Profile</Link>
      </div>
    </div>
  );
};

export default NavBar;
