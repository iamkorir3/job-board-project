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
  {
    title: "job one",
    type: "full time",
  },
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
  return (
    <div className={styles.job}>
      <ul>
        <li>
          <div>
            <h3>{title}</h3>
            <button>...</button>
          </div>
          <p>{type}</p>
        </li>
      </ul>
    </div>
  );
}
export default Posted;
