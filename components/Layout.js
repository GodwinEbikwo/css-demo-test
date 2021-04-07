import Head from 'next/head';
import { GlobalStyles } from '@styles/Global';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </Head>
      <GlobalStyles />

      <main>
        {children}
      </main>
    </>
  );
}

