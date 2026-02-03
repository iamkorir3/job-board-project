import Stats from "../components/Stats";
import styles fron "./DashBoards.module.css";

export default function DashBoards() {
  //dashboard funstions
  return (
    <div className={styles.dasgContainer}>
      <Stats />
    </div>
  );
}
