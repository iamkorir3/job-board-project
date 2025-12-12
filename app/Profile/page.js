export default function Profile() {
  const user = {
    nme: "korir",
    age: 24,
    img: "ui.jpg",
    email: "korir@gmail.com",
  };
  return (
    <div className={profileContainer}>
      <img src={user.img} alt="Profile Picture" />
      <h2>Name: {user.nme}</h2>
      <h3>Age: {user.age}</h3>
      <h3>Email: {user.email}</h3>
    </div>
  );
}
