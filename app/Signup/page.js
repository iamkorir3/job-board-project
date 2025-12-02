import { useState } from "react";
import styles from "./SignUp.module.css";

export default function Login() {
  const [formData, setFormData] = useState({
    fullName: "Alex Smith",
    email: "example@gmail.com",
    password: "@Sn123hsn#",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <h2 className={styles.title}>Create Your Account?</h2>
        <p className={styles.subtitle}>
          Create your account to explore exciting travel destinations and
          adventures.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName" className={styles.label}>
              Full Name*
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password*
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.registerButton}>
            Register
          </button>
        </form>

        <div className={styles.divider}>
          <span className={styles.dividerText}>Or continue with</span>
        </div>

        <div className={styles.socialButtons}>
          <button type="button" className={styles.socialButton}>
            <span className={styles.socialIcon}>G</span>
            Google
          </button>
          <button type="button" className={styles.socialButton}>
            <span className={styles.socialIcon}>A</span>
            Apple
          </button>
        </div>

        <div className={styles.signinLink}>
          Already have an account?{" "}
          <a href="#" className={styles.link}>
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}
