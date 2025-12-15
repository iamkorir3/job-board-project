import { Image } from "next/image";
import styles from "./Dashboard.module.css";
import Nav from "../components/TestNav/page.js";
import Profile from "../Profile/page.js";
import Stats from "../components/Stats.js";
export default function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardContent}>
        <ShortCutToFeature />
        <DashBoardDisplay />
      </div>
    </div>
  );
}

function DashBoardDisplay() {
  return (
    <div className={styles.displayContainer}>
      <Nav />

      <ContentDisplay />
    </div>
  );
}
function ContentDisplay() {
  return (
    <div className={styles.displayContainer}>
      <h2>DashBoard</h2>
      <div>
        <Stats />
        <Stats />
        <Stats />
        <Stats />
        <Stats />
      </div>
    </div>
  );
}

function ShortCutToFeature() {
  return (
    <div className={styles.shortCut}>
      <div className={styles.profilePreview}>
        <h2>Job</h2>
        <img src="ui.jpg" width="100" alt="Job Icon" />
        <p>koir emm..</p>
      </div>
      <div className={styles.buttonsContainer}>
        <button>DashBoard</button>
        <button>My Profile</button>
        <button>My jobs</button>
        <button>Messages</button>
        <button>Submit Job</button>
        <button>Save Candidate</button>
        <button>Membership</button>
        <button>Account Setting</button>
        <button>Delete Account</button>
      </div>
      <div>
        <div></div>
      </div>
      <div className={styles.logout}>
        <button>logout</button>
      </div>
    </div>
  );
}
