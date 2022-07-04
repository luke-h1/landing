import Head from 'next/head';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>404 | {process.env.NEXT_PUBLIC_URL}</title>
      </Head>
      404 - <Link href="/">go home</Link>
    </>
  );
};
export default NotFoundPage;
