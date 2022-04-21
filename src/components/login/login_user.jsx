import React, { useState } from "react";
import "./login_user.css";

const Login_user = () => {
  const [username, setUsername] = useState("");
  const [passwordf, setPasswordf] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");

    if (username === "username" || username === "") {
      // error positivo
      setUsernameError(true);
    } else {
      // error negativo
      setUsernameError(false);
    }
    //Para la clave
    if (passwordf.length < 6) {
      // error positivo
      setPasswordError(true);
    } else {
      // error negativo
      setPasswordError(false);
    }
  };

  return (
    <div className="flex-container centered">
      <div className="card ">
        <form className="form">
          <div className="inputContainer">
            <input
              autoComplete="off"
              placeholder="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`${usernameError ? "inputError" : ""}`}
            />
            <span className={`${usernameError ? "inVisible" : ""} error`}>
              Verifica los datos
            </span>
          </div>
          <div className="inputContainer">
            <input
              placeholder="password"
              name="password"
              type="password"
              value={passwordf}
              onChange={(e) => {
                // console.log(e.target.value);
                setPasswordf(e.target.value);
              }}
              className={`${passwordError ? "inputError" : ""}`}
            />
          </div>
          <button className="btn" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login_user;
