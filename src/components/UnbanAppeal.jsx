import React, { useState } from "react";
import { auth, db, serverTimestamp } from "../firebase";
import "./components.css";

const UnbanAppeal = ({ user }) => {
  const [username, setUsername] = useState("");
  const [bannedBefore, setBannedBefore] = useState("");
  const [guilty, setGuilty] = useState("");
  const [say, setSay] = useState("");

  const submit = async (e) => {
    if (!username || !bannedBefore || !guilty || !say) {
      alert("Please fill all the fields properly");
    } else if (user.emailVerified === false) {
      alert("Please verify your email first!");
    } else {
      try {
        await db.collection("unbanappeal").add({
          uid: user.uid,
          email: auth.currentUser.email,
          username,
          bannedBefore,
          guilty,
          say,
          createdAt: serverTimestamp(),
        });
        alert("Unban Appeal successfully sent!");
        window.location.replace("/");
      } catch (error) {
        alert(`An error occurred: ${error.message}`);
      }
    }
  };
  return (
    <div className="unbanAppeal container">
      <h2 align="center" className="mt-3">
        Unban Appeal
      </h2>
      <p className="falseAppeal">
        <marquee>* False appeals may lead to permanent ban!</marquee>
      </p>
      <div className="unbanAppealFields">
        <div className="unban_name">
          <label htmlFor="name">Minecraft Username: &nbsp;</label>
          <input
            type="text"
            name="name"
            id="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Your Minecraft Username"
          />
        </div>
        <div className="unban_bannedBefore">
          <label htmlFor="unban_bannedBefore">
            Have you ever been banned before? (Yes/No): &nbsp;
          </label>
          <input
            type="text"
            name="unban_bannedBefore"
            id="unban_bannedBefore"
            value={bannedBefore}
            onChange={(e) => setBannedBefore(e.target.value)}
            placeholder="Enter your Response"
          />
        </div>
        <div className="unban_guilty">
          <label htmlFor="unban_guilty">
            Do you admit that you're guilty? (Yes/No): &nbsp;
          </label>
          <input
            type="text"
            name="unban_guilty"
            id="unban_guilty"
            value={guilty}
            onChange={(e) => setGuilty(e.target.value)}
            placeholder="Enter your Response"
          />
        </div>
        <div className="unban_say">
          <label htmlFor="unban_say">
            What do you want to say about your ban?: &nbsp;
          </label>
          <textarea
            name="unban_say"
            id="unban_say"
            value={say}
            onChange={(e) => setSay(e.target.value)}
            rows={5}
            placeholder="Enter your Response"
          ></textarea>
        </div>
        <div className="submit_btn">
          <button className="btn btn-success mb-3 submit" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnbanAppeal;
