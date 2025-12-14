import styles from "./Stats.module.css";
function Stats() {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.statBox}>
        <div>
          <h2>12</h2>
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
