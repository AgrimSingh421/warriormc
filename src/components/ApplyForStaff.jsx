import React, { useState } from "react";
import "./components.css";
import { auth, db, serverTimestamp } from "../firebase";

const ApplyForStaff = ({ user }) => {
  const [username, setUsername] = useState("");
  const [discord, setDiscord] = useState("");
  const [description, setDescription] = useState("");
  const [whetherStaff, setWhetherStaff] = useState("");
  const [eligible, setEligible] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");

  const submit = async () => {
    if (
      !username ||
      !discord ||
      !description ||
      !whetherStaff ||
      !eligible ||
      !answer1 ||
      !answer2 ||
      !answer3
    ) {
      alert("Please fill all the fields properly");
    } else if (user.emailVerified === false) {
      alert("Please verify your email first!");
    } else {
      try {
        await db.collection("staffapplications").add({
          uid: user.uid,
          username,
          discord,
          description,
          whetherStaff,
          eligible,
          answer1,
          answer2,
          answer3,
          email: auth.currentUser.email,
          createdAt: serverTimestamp(),
        });
        alert("Staff Application successfully sent!");
        window.location.replace("/");
      } catch (error) {
        alert(`An error occurred: ${error.message}`);
      }
    }
  };
  return (
    <div className="applyForStaff container">
      <h2 align="center" className="mt-3">
        Apply For Staff
      </h2>
      <div className="applyForStaffFields">
        <div className="applyForStaff_name">
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
        <div className="applyForStaff_discord">
          <label htmlFor="discord">Discord Username (Ex.: John#1234): &nbsp;</label>
          <input
            type="text"
            name="discord"
            id="discord"
            value={discord}
            onChange={(e) => setDiscord(e.target.value)}
            placeholder="Enter Your Discord Username (Ex.: John#1234)"
          />
        </div>
        <div className="applyForStaff_description">
          <label htmlFor="description">Short Description: &nbsp;</label>
          <textarea
            name="description"
            id="description"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter the Description"
          ></textarea>
        </div>
        <div className="applyForStaff_whetherStaff">
          <label htmlFor="whetherStaff">
            Have you ever been a staff member on any server before? (Yes/No):
            &nbsp;
          </label>
          <input
            type="text"
            name="whetherStaff"
            id="whetherStaff"
            value={whetherStaff}
            onChange={(e) => setWhetherStaff(e.target.value)}
            placeholder="Enter Your Response"
          />
        </div>
        <div className="applyForStaff_eligible">
          <label htmlFor="eligible">
            What makes you eligible for this post?: &nbsp;
          </label>
          <textarea
            name="eligible"
            id="eligible"
            rows={3}
            value={eligible}
            onChange={(e) => setEligible(e.target.value)}
            placeholder="Enter your Response"
          ></textarea>
        </div>
        <div className="applyForStaff_answer1">
          <label htmlFor="answer1">
            If you got a report of a player that someone has scammed them, what
            will you do?: &nbsp;
          </label>
          <textarea
            name="answer1"
            id="answer1"
            rows={4}
            value={answer1}
            onChange={(e) => setAnswer1(e.target.value)}
            placeholder="Enter your Answer"
          ></textarea>
        </div>
        <div className="applyForStaff_answer2">
          <label htmlFor="answer2">
            What will you do if you saw a player trying to scam a player?:
            &nbsp;
          </label>
          <textarea
            name="answer2"
            id="answer2"
            rows={4}
            value={answer2}
            onChange={(e) => setAnswer2(e.target.value)}
            placeholder="Enter your Answer"
          ></textarea>
        </div>
        <div className="applyForStaff_answer3">
          <label htmlFor="answer3">
            How will you explain <b>Auction House</b> to a new player?: &nbsp;
          </label>
          <textarea
            name="answer3"
            id="answer3"
            rows={4}
            value={answer3}
            onChange={(e) => setAnswer3(e.target.value)}
            placeholder="Enter your Answer"
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

export default ApplyForStaff;

{
  /*
  Full Name - 1
  Short Description - 2
  Have you ever been a staff member on any server before? - 3
  What makes you eligible for this post? - 4
  Question: If you got a report of a player that he has scammed a person, what will you do? - 5
  Expected Answer: I will first check that if the person has really scammed that person or not. If they have really scammed I'll ban them for about 30 days, if this would be a false report then I'll ban the player who has reported for about 1 week.
  Question: How will you explain Auction House to a new player? - 7
  Expected Answer: Auction House is a place in skyblock where people can put any item in auction and other people can buy that. The item in the auction has a specific time and after that the item expires and no one can buy it. To prevent the item from being expired there is a BIN type that means "Buy It Now". In BIN there is no time, the item can be put in acution for several months without expiring. Also in normal auction you have to bid to the item, after after that specific time, the highest bidder will get the item. But in BIN you can directly purchase the item without any time period.
  Question: What will you do if you saw a player trying to scam a player? - 6
  Expected Answer: I will first observe if he is really trying to scam someone. If yes, I will fitrst warn the player that if he will scam he will be banned. If I again saw that player scamming I will ban them for about 10-15 days.

*/
}
