import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href='/'>Home</Link>
        <Link href='/coins'>List of Coins</Link>
      </div>
    </div>
  );
};

export default NavBar;
