import Link from 'next/link';
import styles from '../styles/PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <h1>Page Not found</h1>
      <h3>Check if you are in correct page</h3>
      <Link href='/'>Click here to go home page</Link>
    </div>
  );
};

export default PageNotFound;
