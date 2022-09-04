import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Title</title>
      </Head>
      <h3 className={styles.homePageTitle}>Hello world</h3>
      <div>Simple Next.Js app for list of cryptocurrencies</div>
    </div>
  );
}
