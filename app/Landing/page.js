"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Jobs Solution</h1>
        <p>Connect to a job easily</p>
      </div>
      <div>
        {/* <Image src="coming.jpg" width="20" height="20" alt="prof pic" /> */}
      </div>
      <CallToAction />
    </div>
  );
}

function CallToAction() {
  const router = useRouter();
  function handleGetStarted() {
    router.push("/Signup");
  }

  function handleAbout() {
    router.push("/AboutUs");
  }

    function handleContactUs() {
    router.push("/contactpage");
  }
  return (
    <div className={styles.ctaContainer}>
      <button onClick={handleGetStarted} className={styles.ctaButton}>
        Get Started
      </button>
      <button className={styles.ctaButton} onClick={handleAbout}>
        About us
      </button>

     <button className={styles.ctaButton} onClick={handleContactUs}>
       Contact us
      </button>
    </div>
  );
}
