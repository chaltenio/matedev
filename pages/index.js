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
          Serving the LatAm & ANZ Software Communities since 2010
        </h2>

        <p className={styles.description}>
          <code className={styles.code}>Empowering people through community projects by creating spaces for connection, sharing knowledge and collaboration between developers.</code>
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
          I help Tech Companies to Build and Empower their Communities / Auckland / San Francisco / Buenos Aires /
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
