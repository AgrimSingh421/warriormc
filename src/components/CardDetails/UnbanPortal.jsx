import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import "../components.css";
import emailjs from "@emailjs/browser";

const UnbanPortal = () => {
  const [appealData, setAppealData] = useState({});
  const [response, setResponse] = useState("");
  const { appealid } = useParams();
  db.collection("unbanappeal")
    .doc(appealid)
    .get()
    .then((doc) => {
      setAppealData(doc.data());
    });

  const serviceID = "service_pwpxqk9";
  const templateID = "template_a9prmlu";
  const publicKey = "DHl6-5LqINeZ47SPr";

  const templateParams = {
    to_email: appealData.email,
    to_name: appealData.username,
    message: response,
  };

  const submit = async () => {
    if (!response) {
      alert("Please give a response to the user");
    } else {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      alert("Response sent successfully");
      db.collection("unbanappeal")
        .doc(appealid)
        .delete()
        .then(() => {
          console.log("Document deleted");
        });
      window.location.replace("/");
    }
  };
  return (
    <div className="unbanAppeal container">
      <h2 align="center" className="mt-3 mb-4">
        Unban Appeal by "{appealData.username}"
      </h2>
      <span>
        <b>Have they ever been banned before?</b>
      </span>
      <br />
      <span>
        <b>{">"}</b> {appealData.bannedBefore}
      </span>
      <br />
      <span>
        <b>Do they admit that they are guilty?</b>
      </span>
      <br />
      <span>
        <b>{">"}</b> {appealData.bannedBefore}
      </span>
      <br />
      <span>
        <b>The user wants to say about their ban:</b>
      </span>
      <br />
      <span className="mb-4">
        <b>{">"}</b> {appealData.say}
      </span>
      <br />
      <hr />
      <br />
      <div className="reply">
        <label htmlFor="response">Enter your response: &nbsp;</label>
        <textarea
          name="response"
          id="response"
          rows={3}
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          placeholder="Enter your Response"
        ></textarea>
      </div>
      <div className="submit_btn">
        <button className="btn btn-success mb-3 submit" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UnbanPortal;
