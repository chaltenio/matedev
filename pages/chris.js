import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Chris() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chris Mazur - mate.dev</title>
        <meta name="description" content="mate.dev community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Chris[tian] Mazur{"      "}
          <span role="img" aria-label="mate">
          
        </span>          
        </h1>
        
        <p className={styles.description}>
        IT Consultant - Software Developer - Passionate about Tech Communities and collaborative learning.{" "}🇦🇷 🇳🇿 🧉♟
        </p>

        <div className={styles.grid}>
          <a href="https://twitter.com/chmazur" className={styles.cardSocial}>
            <h2>Twitter &rarr;</h2>
            <p>@chmazur</p>
          </a>

          <a href="https://www.linkedin.com/in/cloud-native" className={styles.cardSocial}>
            <h2>LinkedIn &rarr;</h2>
            <p>cloud-native</p>
          </a>

          <a href="https://github.com/chaltenio" className={styles.cardSocial}>
            <h2>Github &rarr;</h2>
            <p>chaltenio</p>
          </a>
        </div>

        <div className={styles.grid}>  

        <a href="#" className={styles.cardSocial}>
            <h2>Blog?</h2>
            <p>Coming soon!</p>
          </a>

         <a href="https://discord.gg/xT9cMSy" className={styles.cardSocial}>
            <h2>Discord &rarr;</h2>
            <p>Join me!</p>
          </a>

          <a href="https://www.chess.com/member/chmazur" className={styles.cardSocial}>
            <h2>Chess.com &rarr;</h2>
            <p>Let's play?!</p>
          </a>  
        </div>        

        <div className={styles.grid}> 
          <div>
          <h2>My journey with communities:{' '} </h2>

          <div>
            <p>
              - Argentina PHP User Group Co-Founder <br />
              - Co-Founder & Co-Organizer PHP Conference Argentina (Buenos Aires - @phpconferencear)<br />
              - Founder & Organizer PHP Conference New Zealand (Wellington - php.org.nz)<br />
              - Founder & Organizer ScaleConf New Zealand (Wellington - @sconfnz)<br />
              - Founder & Organizer Cloud Native Summit (Wellington - {" "}<a href="https://cloudnativesummit.co/nz" target="_blank">
              cloudnativesummit.co)</a><br />
              - Founder & Organizer Service Mesh Day (San Francisco & Online - {" "}<a href="https://servicemeshday.com" target="_blank">servicemeshday.com</a>)<br />
              - Founder & Organizer FullStack Day (Auckland & Online - {" "}<a href="https://fullstackday.com" target="_blank">fullstackday.com</a>)<br />
              - Web Dev Meetup Wellington & Auckland<br />
              - Devops Meetup Wellington<br />
              - Cloud Native Meetup Auckland, <br />
              - Connectar.DEV (online meetup)<br />
              - Organizer Elastic NZ community<br />
              - Layer5 contributor (Service Meshes community)<br />
            </p>  
          </div>

          </div>
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

export default Chris