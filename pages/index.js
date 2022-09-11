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

        <h2>
          We help Tech Companies to Build and Empower their Communities.
        </h2>

        <p className={styles.description}>
          <code className={styles.code}>Connecting the DEV Community in the APAC & LATAM regions since 2013</code>
        </p>

        <h4 className={styles.subtitle}>
        Cloud Native Summit / Service Mesh Day / ScaleConf NZ / FullStack Day and more...
        </h4>

        <div className={styles.grid}>
          <Newsletter />
        </div>
        
      </main>

      <footer className={styles.footer}>      
        <a
          href="https://twitter.com/matedotdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          @matedotdev / Building Tech Communities since 2013 from NZ. 
        </a>
        {' '} - {' '}
        <a
          href="https://mate.dev/chris"
          target="_blank"
          rel="noopener noreferrer"
        >
         Contact
        </a>
      </footer>
    </div>
  )
}
