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
          Chris Mazur{"      "}
          <span role="img" aria-label="mate">
          
        </span>          
        </h1>
        
        <p className={styles.description}>
        Software & DevOps Engineer + CNCF Ambassador + Director of Community Development @ Tetrate.io | From #Patagonia.{" "}🇦🇷 🇳🇿 🧉 ♜
        </p>

        <div className={styles.grid}>
          <a href="https://twitter.com/chmazur" className={styles.cardSocial}>
            <h2>Twitter &rarr;</h2>
            <p><img src="/svgs/twitter.svg" alt="@chmazur" className={styles.logo} />{" "}@chmazur</p>
          </a>

          <a href="https://www.linkedin.com/in/cloud-native" className={styles.cardSocial}>          
            <h2>LinkedIn &rarr;</h2>
            <p><img src="/svgs/linkedin.svg" alt="matedev" className={styles.logo} />{" "}matedev</p>
          </a>

          <a href="https://github.com/chaltenio" className={styles.cardSocial}>
            <h2>Github &rarr;</h2>
            <p><img src="/svgs/github.svg" alt="chaltenio" className={styles.logo} />{" "}chaltenio</p>
          </a>
        </div>

        <div className={styles.grid}>  

          <a href="https://discord.gg/xT9cMSy" className={styles.cardSocial}>
            <h2>Discord &rarr;</h2>
            <p>Join connecta.dev!</p>
          </a>

          <a href="https://lichess.org/@/chaltenio" className={styles.cardSocial}>
            <h2>lichess.org &rarr;</h2>
            <p>Let's play?!</p>
          </a>  

          <a href="#" className={styles.cardSocial}>
            <h2>WeChat</h2>
            <p>matedev</p>
          </a>

        </div>        

        <div className={styles.grid}> 
          <div>
          <h2>Connecting the Software Development Community in the APAC & LATAM regions since 2010:{' '} </h2>
          
          <div>            
            <p>🧉{' '}CNCF Ambassador <a href="https://www.credly.com/badges/dccc1596-15c1-474f-8d12-626c5b3b2534" target="_blank"> (Issued by The Linux Foundation)</a></p>
            <p>🧉{' '}Co-Chair KubeDay Australia 2024 - Melbourne<a href="https://www.credly.com/badges/f96c2033-ae20-4676-bbed-3921476dd7ec" target="_blank"> (Issued by The Linux Foundation)</a></p>
            <p>🧉{' '}Co-Founder Argentina PHP User Group (Argentina <a href="https://x.com/grupophp" target="_blank"> @grupophp</a>)</p>
            <p>🧉{' '}Co-Founder & Co-Organiser PHP Conference Argentina (Buenos Aires - <a href="https://twitter.com/phpconferencear" target="_blank">@phpconferencear</a>)</p>
            <p>🧉{' '}Founder & Organiser PHP Conference New Zealand (Wellington - <a href="https://twitter.com/phpconfnz" target="_blank">@phpconfnz</a>)</p>
            <p>🧉{' '}Founder & Organiser ScaleConf New Zealand (Wellington - <a href="https://twitter.com/sconfnz" target="_blank">@sconfnz</a>)</p>
            <p>🧉{' '}Founder & Organiser Cloud Native Summit (Wellington - {" "}<a href="https://cloudnativesummit.co/nz" target="_blank">cloudnativesummit.co)</a></p>
            <p>🧉{' '}Founder & Organiser Service Mesh Day (San Francisco & Online - {" "}<a href="https://servicemeshday.com" target="_blank">servicemeshday.com</a>)</p>
            <p>🧉{' '}Founder & Organiser Full-Stack Day (Auckland & Online - {" "}<a href="https://fullstackday.com" target="_blank">fullstackday.com</a>)</p>
            <p>🧉{' '}Founder & Co-Organiser <a href="https://www.meetup.com/Full-Stack-Dev-New-Zealand/" target="_blank">Full-Stack Dev New Zealand</a> (Meetup)</p>
            <p>🧉{' '}Founder & Organiser <a href="https://www.meetup.com/Wellington-Web-Dev/" target="_blank">Web Development Wellington</a> (Meetup)</p>
            <p>🧉{' '}Organiser <a href="https://www.meetup.com/aucklandweb/" target="_blank">Web Dev Meetup Auckland</a> (Meetup)</p>
            <p>🧉{' '}Founder & Co-Organiser <a href="https://www.meetup.com/Wellington-DevOps-Group/" target="_blank">Devops Wellington</a> (Meetup)</p>
            <p>🧉{' '}Founder & Organiser <a href="https://www.meetup.com/Cloud-Native-Auckland/" target="_blank">Cloud Native & Platform Engineering Auckland</a> (Meetup)</p>
            <p>🧉{' '}Founder & Organiser <a href="https://connecta.dev" target="_blank">Connecta.DEV (online community)</a></p>
            <p>🧉{' '}Co-Organiser <a href="https://www.meetup.com/golang-argentina/" target="_blank">Golang Argentina</a> (Meetup)</p>
            <p>🧉{' '}Founder & Organiser (Buenos Aires & Online - {" "}<a href="https://www.meetup.com/full-stack-engineering-buenos-aires" target="_blank">Full-Stack Buenos Aires</a>)</p>
          </div>

          </div>
        </div> 

      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/chmazur"
          target="_blank"
          rel="noopener noreferrer"
        >
          @chmazur
        </a>
      </footer>
    </div>
  )
}

export default Chris
