import styles from "./messages.module.css";
const messages = [
  {
    name: "messenger",
    meseges: ["message1", "message1", "message3", "message4", "message5"],
  },
  {
    name: "messenger2",
    meseges: ["message1", "message1", "message3", "message4", "message5"],
  },
  {
    name: "messenger3",
    meseges: ["message1", "message1", "message3", "message4", "message5"],
  },
  {
    name: "messenger4",
    meseges: ["message1", "message1", "message3", "message4", "message5"],
  },
  {
    name: "messenger5",
    meseges: ["message1", "message1", "message3", "message4", "message5"],
  },
  {
    name: "messenger6",
    meseges: ["message1", "message1", "message3", "message4", "message5"],
  },
];

function Messages() {
  return (
    <div style={{ display: "flex" }}>
      <div className={styles.MessagerProfile}>
        {messages.map((messagebody, index) => (
          <Messenger key={index} messagebody={messagebody} />
        ))}
      </div>
      <div>
        {messages.map((messagebody, index) => (
          <ViewMessage key={index} meseges={messagebody.meseges} />
        ))}
      </div>
    </div>
  );
}

function Messenger({ messagebody }) {
  const { name, meseges } = messagebody;
  //   console.log(meseges);
  const lastMessage = meseges[meseges.length - 1];

  return (
    <div>
      <div className={styles.messangers}>
        <h2>{name}</h2>
        <p>{lastMessage}</p>
      </div>
      <div>{/* <ViewMessage meseges={meseges} /> */}</div>
    </div>
  );
}

function ViewMessage({ meseges }) {
  return (
    <div className={styles.messages}>
      {meseges.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
}

export default Messages;
