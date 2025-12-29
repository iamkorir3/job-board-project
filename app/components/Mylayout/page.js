import Dashboard from "../../DashBoard/page";
import styles from "./Dashboard.module.css";
import Nav from "../components/TestNav/page.js";
import Profile from "../Profile/page.js";
import Stats from "../components/Stats.js";
import Posted from "../components/Posted/page.js";
function Mylayout() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default Mylayout;
