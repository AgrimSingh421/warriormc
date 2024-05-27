import React, { useState, useEffect } from "react";
import "./components.css";
import { auth, db, serverTimestamp } from "../firebase";

const ReportAPlayer = () => {
  const [name, setName] = useState("");
  const [did, setDid] = useState("");

  const submit = () => {
    db.collection("playerreports")
      .add({
        playerName: name,
        did,
        author: auth.currentUser.uid,
        authorName: auth.currentUser.displayName,
        createdAt: serverTimestamp(),
      })
      .then(() => {
        alert("Player Report Successfully Sent");
      });
  };
  return (
    <div className="reportAPlayer container">
      <h2 align="center" className="mt-3">
        Report A Player
      </h2>
      <p className="falseReport">
        <marquee>* False reports may lead to permanent ban!</marquee>
      </p>
      <div className="reportAPlayerFields">
        <div className="reportAPlayer_name">
          <label htmlFor="name">Player's Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter the Player's Name"
          />
        </div>
        <div className="reportAPlayer_did">
          <label htmlFor="did">What did he do?</label>
          <textarea
            name="did"
            id="did"
            rows={4}
            value={did}
            onChange={(e) => setDid(e.target.value)}
            placeholder="Enter your response"
          ></textarea>
        </div>
        <div className="submit">
          <button className="btn btn-success submit" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportAPlayer;
