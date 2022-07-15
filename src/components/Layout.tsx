import Head from 'next/head';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { Header } from './Header';

interface LayoutProps {
  title: string;
  children: ReactNode;
}

export function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />

      <motion.main
        layout
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="container marginMainContent"
      >
        {children}
      </motion.main>
    </>
  );
}
