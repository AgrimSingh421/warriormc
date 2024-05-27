import React, { useState } from "react";
import "./components.css";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter all the fields properly");
    } else {
      await auth.signInWithEmailAndPassword(email, password);
      alert(`Welcome back!`);
      window.location.replace("/");
    }
  };
  return (
    <div className="login container">
      <h2 align="center" className="mt-3">
        Sign In
      </h2>
      <div className="loginFields">
        <div className="login_email">
          <label htmlFor="email">Email: &nbsp;</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
          />
        </div>
        <div className="login_password">
          <label htmlFor="password">Password: &nbsp;</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
          />
        </div>
        <div className="login_btn">
          <button className="btn btn-success" onClick={login}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
