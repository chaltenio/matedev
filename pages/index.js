import Head from 'next/head'
import Image from 'next/image'
import Newsletter from "../components/newsletter";
import styles from '../styles/Home.module.css'
import { GoogleTagManager } from '@next/third-parties/google'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        return <GoogleAnalytics gaId="G-82583WQEKP" />
        <title>mate.dev</title>
        <meta name="description" content="mate.dev community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to mate.dev!
        </h1>

        <h2>
          Serving the LatAm & ANZ Software Communities since 2010
        </h2>

        <p className={styles.description}>
          <code className={styles.code}>Empowering developers through community projects, by creating inclusive spaces for connection, knowledge sharing and collaboration.</code>
        </p>

        <h4 className={styles.subtitle}>
        Founder Cloud Native Summit / Service Mesh Day / ScaleConf NZ / FullStack Day / PHP Conf Argentina & NZ / connecta.dev / Tech Meetups and more...
        </h4>

        <div className={styles.grid}>
          <Newsletter />
        </div>
        
      </main>

      <footer className={styles.footer}>      
        <a
          href="https://www.linkedin.com/in/cloud-native/"
          target="_blank"
          rel="noopener noreferrer"
        >
          I help Global Tech Companies to Build and Empower their Tech Communities / Auckland / San Francisco / Buenos Aires /
        </a>
        {' '} - {' '}
        <a
          href="https://mate.dev/chris"
          target="_blank"
          rel="noopener noreferrer"
        >
         Contact Chris
        </a>
      </footer>
    </div>
  )
}
