import Image from "next/image";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Job Solutions</h1>
        <p>Connect to a job easily</p>
      </div>
      <div>
        <Image src="coming" width="20" height="20" alt="prof pic" />
      </div>
    </div>
  );
}
