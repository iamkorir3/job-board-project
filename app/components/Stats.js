import styles from "./Stats.module.css";
function Stats() {
  const numberOfJobs = jobs.length;
  return (
    <div className={styles.statsContainer}>
      <div className={styles.statBox}>
        <div>
          <h2>{numberOfJobs}</h2>
          <p>jobs posted</p>
        </div>
        <div>
          <h1>icon</h1>
        </div>
      </div>
    </div>
  );
}

export default Stats;
