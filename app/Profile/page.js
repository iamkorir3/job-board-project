export default function Profile() {
  const user = {
    nme: "korir",
    age: 24,
    img: "korir.jpg",
    email: "korir@gmail.com",
  };
  return (
    <div>
      <h1>Profile Page</h1>
      <h2>Name: {user.nme}</h2>
      <h3>Age: {user.age}</h3>
      <h3>Email: {user.email}</h3>
      <img src={user.img} alt="Profile Picture" />
    </div>
  );
}
