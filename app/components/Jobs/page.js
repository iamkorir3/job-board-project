const myjobs = [
  {
    title: "my jobs",
    descriptions: "describing my ",
  },
  {
    title: "my jobs",
    descriptions: "describing my ",
  },
  {
    title: "my jobs",
    descriptions: "describing my ",
  },
  {
    title: "my jobs",
    descriptions: "describing my ",
  },
];

export default function Jobs() {
  return (
    <div>
      {myjobs.map((job, index) => (
        <Job key={index} job={job} />
      ))}
    </div>
  );
}

function Job({ job }) {
  const { title, description } = job;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button>View</button>
    </div>
  );
}
