import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import '@fontsource/poppins';
import Head from 'next/head';
import '../styles/global.css';

function App({ Component, pageProps, router }: AppProps) {
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;

  return (
    <>
      <DefaultSeo
        titleTemplate="%s"
        title={process.env.NEXT_PUBLIC_URL}
        canonical={canonicalUrl}
      />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
