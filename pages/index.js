import Head from 'next/head'
import Image from 'next/image'
import Newsletter from "../components/newsletter";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mate.dev</title>
        <meta name="description" content="mate.dev community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to mate.dev!
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>Connecting the DEV Community in the Southern Hemisphere</code>
        </p>

        <div className={styles.grid}>
          <Newsletter />
        </div>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://mate.dev/chris"
          target="_blank"
          rel="noopener noreferrer"
        >
          2021 - Contact
        </a>
      </footer>
    </div>
  )
}
