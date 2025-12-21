"use client";
import { useState } from "react";
import styles from "./Posted.module.css";
const jobs = [
  {
    title: "job one",
    type: "full time",
  },
  {
    title: "job one",
    type: "full time",
  },
  {
    title: "job one",
    type: "full time",
  },
  {
    title: "job one",
    type: "full time",
  },
  {
    title: "job one",
    type: "full time",
  },
  {
    title: "job one",
    type: "full time",
  },
  { title: "job one", type: "full time" },
];

function Posted() {
  return (
    <div className={styles.postedContainer}>
      {jobs.map((job, index) => (
        <JobList key={index} job={job} />
      ))}
    </div>
  );
}

function JobList({ job }) {
  const { type, title } = job;
  const [showopt, setshowopt] = useState(true);

  function showOptions() {
    console.log(showopt);
    setshowopt(false);
    // setshowopt(showopt === true ? false : true);
  }

  return (
    <div className={styles.job}>
      <ul>
        <li>
          <div>
            <h3>{title}</h3>
            <button onClick={showOptions} className={styles.optbtnn}>
              <ion-icon name="ellipsis-vertical-outline"></ion-icon>
            </button>
          </div>
          <p>{type}</p>
          <div className={`${styles.options} ${styles.showoption}`}>
            <button>Save</button>
            <button>view</button>
            <button>hide</button>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default Posted;
