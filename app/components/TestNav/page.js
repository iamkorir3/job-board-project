import Link from "next/link";
import styles from "./TestNav.module.css";
export default function Nav() {
  return (
    <div className={styles.navContainer}>
      <CustomNav />
      <NavSearch />
      <Notification />
    </div>
  );
}

function CustomNav() {
  return (
    <div className={styles.customNav}>
      <Link href="/">Home</Link>
      <Link href="/about">Jobs</Link>
      <Link href="/about">Explore</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}

function NavSearch() {
  return (
    <div className={styles.navSearch}>
      <input type="text" placeholder="Search..." />
      <button>Search</button>
    </div>
  );
}
function Notification() {
  return (
    <div className={styles.notification}>
      <button>not</button>
      <button>post a job</button>
    </div>
  );
}
