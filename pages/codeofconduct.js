import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function codeofconduct() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Code of Conduct - mate.dev</title>
        <meta name="description" content="mate.dev community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Code of Conduct        
        </h1>
        
    

        <div className={styles.grid}> 
          <div>
          <h2>We encourage everyone to assist in creating a welcoming and safe environment.</h2>
          
            <div>
                <p>We are dedicated to providing a harassment-free experience for everyone, regardless of gender, race, sexual orientation, disability, religion, or any other protected classification. </p>
                <p>Everyone attending this event is expected to follow this Anti-Harassment Policy. This includes but is not limited to: Attendees, Speakers, Partners, Exhibitors, Volunteers and staff. All attendees are expected to follow the Anti-Harassment Policy in any situation in which they are interacting with one another during this event on or offsite. Harassment in any form, will not be tolerated. </p>
                <br />
                <h2>Participant Behavior</h2>
                <p>Harassment includes, but is not limited to, offensive verbal comments related to gender, race, sexual orientation, disability, religion, or any other protected classification directed toward an individual or group. Intimidation, threats, stalking, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome attention will also be considered harassment. Similarly, sexual, racist, derogatory, threatening, or other inappropriate language and imagery are not appropriate for any conference venue, including sessions.</p>
                <br />
                <h2>Recourse</h2>
                <p>If a participant violates this Anti-Harassment Policy, the event organizers may take any action they deem appropriate, including warning the offender or expelling the offender from this and/or future events organized by them. No refunds will be granted to attendees expelled from the event due to violations of this policy.</p>
                <br />
                <h2>Reporting</h2>
                <p>If you are being harassed, witness harassment, or have any other concerns, please contact your host.</p>
                <p>If anyone is in physical danger or requires an immediate response, they are encouraged to notify appropriate law enforcement first.</p>
                <p>If you have any questions about this Anti-Harassment Policy, please contact ch@mate.dev</p>
            </div>
          </div>
        </div> 

      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/matedotdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          @matedotdev
        </a>
      </footer>
    </div>
  )
}

export default codeofconduct