import { useState } from "react";
import axios from "axios";
import styles from '../styles/Home.module.css'

export default function newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/newsletter", { email });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  return (
    <div>


      <p className={styles.descriptiontitle}>
         Follow our progress. Join our newsletter to receive monthly updates about tech meetups, conferences and special activities. 
      </p>      

      <div className={styles.registerMailchimp}>
        <input className={styles.registerMailchimpInput}         
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" className={styles.registerMailchimpButton} disabled={state === "LOADING"} onClick={subscribe}>Join</button>
      </div>

      {state === "ERROR" && (
        <p className={styles.description}>{errorMessage}</p>
      )}

      {state === "SUCCESS" && (
        <p className={styles.description}>Thanks! I'll be in touch shortly :) Chris Mazur.-</p>
      )}

    </div>
  );
};


// Attributions:
// https://github.com/uriklar/uriklar-next/blob/master/components/newsletter.jsx