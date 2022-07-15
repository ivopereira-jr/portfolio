import Head from 'next/head';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { AnimatePresence } from 'framer-motion';

import '../styles/globals.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <NextNProgress
        color="#2d99ff"
        startPosition={0.2}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default App;
