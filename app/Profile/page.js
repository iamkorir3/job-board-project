import styles from "./Profile.module.css";
export default function Profile() {
  const user = {
    name: "korir",
    age: 24,
    img: "ui.jpg",
    email: "korir@gmail.com",
    description:
      "i am a software developer, love coding and coffee. Based in Nairobi. Looking for new opportunities to grow and learn.",
    location: "Nairobi",
  };
  return (
    <div className={styles.profileContainer}>
      <UserInfo user={user} />
    </div>
  );
}
function UserInfo({ user }) {
  return (
    <div className={styles.userInfo}>
      <img src={user.img} alt="Profile Picture" />
      <div className={styles.userInfoHeader}>
        <div className={styles.userHeader}>
          <div className={styles.userDetails}>
            <h2>Name: {user.name}</h2>
            <p>{user.location}</p>
          </div>
          <button className={styles.editBtn}>Edit Profile</button>
          <button>Public View</button>
        </div>
        <div className={styles.userBio}>
          <p>{user.description}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
}
