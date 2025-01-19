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
          Building communities, one Mate 🧉 at a time!
        </h2>

        <p className={styles.description}>
          <code className={styles.code}>
          Empowering LatAm & ANZ software communities since 2010 by fostering inclusive spaces for connection, knowledge sharing, and collaboration.
          </code>
        </p>

        <div className={styles.grid}>
          <Newsletter />
        </div>
        
        <p>Founder Cloud Native Summit / Service Mesh Day / ScaleConf NZ / Full-Stack Day / PHP Conf Argentina & NZ / connecta.dev / Tech Meetups and more...</p>
      </main>

      <footer className={styles.footer}>      
        <a
          href="https://www.linkedin.com/in/cloud-native/"
          target="_blank"
          rel="noopener noreferrer"
        >
        Auckland / San Francisco / Buenos Aires
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
