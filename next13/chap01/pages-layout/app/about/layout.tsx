import React from 'react';
import styles from './page.module.css';
import Head from './head';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head />
      <nav>About navbar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
