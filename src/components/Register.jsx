import React, { useState } from "react";
import { auth, db } from "../firebase";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    if (!username || !email || !password || !cpassword) {
      alert("Please enter all the fields properly");
    } else if (password !== cpassword) {
      alert("Passwords do not match");
    } else {
      try {
        const result = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await result.user.updateProfile({
          displayName: username,
        });

        await auth.currentUser.sendEmailVerification();

        await db.collection("users").doc(result.user.uid).set({
          uid: result.user.uid,
          name: username,
          email,
          admin: false,
        });
        alert(
          `Welcome, ${result.user.displayName}! A verification link is sent to your email. Please check it.`
        );
        window.location.replace("/");
      } catch (error) {
        alert(`An error occured: ${error.message}`);
      }
    }
  };
  return (
    <div className="register container">
      <h2 align="center" className="mt-3">
        Sign Up
      </h2>
      <div className="registerFields">
        <div className="register_name">
          <label htmlFor="name">Name: &nbsp;</label>
          <input
            type="text"
            name="name"
            id="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Your Full Name"
          />
        </div>
        <div className="register_email">
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
        <div className="register_password">
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
        <div className="register_cpassword">
          <label htmlFor="cpassword">Confirm Password: &nbsp;</label>
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
            placeholder="Confirm Your Password"
          />
        </div>
        <div className="register_btn">
          <button className="btn btn-success" onClick={register}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
