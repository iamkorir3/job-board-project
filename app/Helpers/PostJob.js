const jobs = [
  { titlte: "korir", time: "22", description: "lorem ipsum" },
  { titlte: "korir", time: "22", description: "lorem ipsum" },
  { titlte: "korir", time: "22", description: "lorem ipsum" },
  { titlte: "korir", time: "22", description: "lorem ipsum" },
];

const PostJob = (job) => {
  // getting the selected job and adding it to the jo array
  //but i need to add it to db where it will be refetched at jobs page
  [job, ...jobs];
};
