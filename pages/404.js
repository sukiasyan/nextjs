import Link from 'next/link';

const PageNotFound = () => {
  return (
    <div>
      <h1>Page Not found</h1>
      <h3>Check if you are in correct page</h3>
      <Link href='/'>Click here to go home page</Link>
    </div>
  );
};

export default PageNotFound;
