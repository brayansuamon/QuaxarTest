import React, { useState } from "react";
import styles from "./login_user.module.scss";
const {
  card,
  flex_container,
  centered,
  inputContainer,
  form,
  btn,
  error,
  inVisible,
  inputError,
} = styles;

const Login_user = () => {
  const [username, setUsername] = useState("");
  const [passwordf, setPasswordf] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");

    if (username === "username" || username === "") {
      // positive error
      setUsernameError(true);
    } else {
      // negative error
      setUsernameError(false);
    }
    //To password
    if (passwordf.length < 6) {
      // positive error
      setPasswordError(true);
    } else {
      // negative error
      setPasswordError(false);
    }
  };

  return (
    <div className={`${flex_container} ${centered}`}>
      <div className={card}>
        <form className={form}>
          <div className={inputContainer}>
            <input
              autoComplete="off"
              placeholder="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`${usernameError ? inputError : ""}`}
            />
            <span className={`${usernameError ? inVisible : ""} ${error}`}>
              Verifica los datos
            </span>
          </div>
          <div className={inputContainer}>
            <input
              placeholder="password"
              name="password"
              type="password"
              value={passwordf}
              onChange={(e) => {
                // console.log(e.target.value);
                setPasswordf(e.target.value);
              }}
              className={`${passwordError ? inputError : ""}`}
            />
          </div>
          <button className={btn} onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login_user;
