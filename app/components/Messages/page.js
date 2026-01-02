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
  return <div></div>;
}

function Messenger() {
  return (
    <div>
      <duv></duv>
      <duv>
        <h2>name</h2>
        <p>last message</p>
      </duv>
    </div>
  );
}

function ViewMessage() {
  const MessangerMessges = messages.meseges;
  return (
    <div>
      {MessangerMessges.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
}

export default Messages;
