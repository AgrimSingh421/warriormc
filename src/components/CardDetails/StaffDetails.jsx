import React, { useState } from "react";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";

const StaffDetails = () => {
  const [staffData, setStaffData] = useState({});
  const { applicationid } = useParams();

  db.collection("staffapplications")
    .doc(applicationid)
    .get()
    .then((doc) => {
      setStaffData(doc.data());
    });

  const acceptHeading =
    "Congratulations! Your staff application has been accepted.";
  const acceptMessage =
    "Please join our Discord server to get your Trainee rank. If you have already joined our server, please check your DM, we would have probably messaged you.";

  const rejectHeading =
    "We're sorry, but your staff application has been rejected.";
  const rejectMessage =
    "You can try again next time when the staff applications open.";

  const approve = async (e) => {
    e.preventDefault();

    const serviceID = "service_pwpxqk9";
    const templateID = "template_0mqrhpe";
    const publicKey = "DHl6-5LqINeZ47SPr";

    const templateParams = {
      subject: "Staff Application Accepted!",
      to_email: staffData.email,
      to_name: staffData.username,
      heading: acceptHeading,
      message: acceptMessage,
    };

    await emailjs.send(serviceID, templateID, templateParams, publicKey);
    alert(`Approval email successfully sent to ${staffData.username}.`);
  };

  const reject = async (e) => {
    e.preventDefault();

    const serviceID = "service_pwpxqk9";
    const templateID = "template_0mqrhpe";
    const publicKey = "DHl6-5LqINeZ47SPr";

    const templateParams = {
      subject: "Staff Application Rejected!",
      to_email: staffData.email,
      to_name: staffData.username,
      heading: rejectHeading,
      message: rejectMessage,
    };

    await emailjs.send(serviceID, templateID, templateParams, publicKey);
    alert(`Rejection Email Successfully sent to ${staffData.username}.`);

    db.collection("staffapplications")
      .doc(applicationid)
      .delete()
      .then(() => {
        console.log("Document deleted");
      });
    window.location.replace("/");
  };
  return (
    <div className="staffDetails container">
      <h2 align="center" className="mt-3">
        Staff Application
      </h2>
      <p>
        <b>
          * Expected Answers may vary from the actual answer, please review it
          carefully
        </b>
      </p>
      <span>
        <b>Q: Name</b>
      </span>
      <br />
      <span>
        <b>A:</b> {staffData.username}
      </span>
      <br />
      <br />
      <span>
        <b>Q: Discord Username:</b>
      </span>
       <br />
      <span>
        <b>A: </b> {staffData.discord}
      </span>
      <br />
      <br />
      <span>
        <b>Q: Short Description</b>
      </span>
      <br />
      <span>
        <b>A:</b> {staffData.description}
      </span>
      <br />
      <br />
      <span>
        <b>Q: Have you ever been a staff member on any server before?</b>
      </span>
      <br />
      <span>
        <b>A:</b> {staffData.whetherStaff}
      </span>
      <br />
      <br />
      <span>
        <b>Q: What makes you eligible for this post?</b>
      </span>
      <br />
      <span>
        <b>A:</b> {staffData.eligible}
      </span>
      <br />
      <br />
      <span>
        <b>
          Q: If you got a report of a player that he has scammed a person, what
          will you do?
        </b>
      </span>
      <br />
      <span>
        <b>A:</b> {staffData.answer1}
      </span>
      <br />
      <span>
        <b>Expected Answer: </b>{" "}
        <i>
          I will first check that if the person has really scammed that person
          or not. If they have really scammed I'll ban them for about 30 days,
          if this would be a false report then I'll ban the player who has
          reported for about 1 week.
        </i>
      </span>
      <br />
      <br />
      <span>
        <b>Q: What will you do if you saw a player trying to scam a player?</b>
      </span>
      <br />
      <span>
        <b>A:</b> {staffData.answer2}
      </span>
      <br />
      <span>
        <b>Expected Answer: </b>{" "}
        <i>
          I will first observe if he is really trying to scam someone. If yes, I
          will first warn the player that if they will scam they will be banned.
          If I again saw that player scamming I will ban them for about 10-15
          days.
        </i>
      </span>
      <br />
      <br />
      <span>
        <b>Q: How will you explain Auction House to a new player?</b>
      </span>
      <br />
      <span>
        <b>A:</b> {staffData.answer3}
      </span>
      <br />
      <span>
        <b>Expected Answer: </b>{" "}
        <i>
          Auction House is a place in skyblock where people can put any item in
          auction and other people can buy that. The item in the auction has a
          specific time and after that the item expires and no one can buy it.
          To prevent the item from being expired there is a BIN type that means
          "Buy It Now". In BIN there is no time, the item can be put in auction
          for several months without expiring. Also in normal auction you have
          to bid to the item, and after that specific time, the highest bidder
          will get the item. But in BIN you can directly purchase the item
          without any time period.
        </i>
      </span>
      <br />
      <br />
      <hr />
      <br />
      <h3>Approve Application?</h3>
      <button className="btn btn-success mr-3" onClick={(e) => approve(e)}>
        Approve
      </button>
      <button className="btn btn-danger" onClick={(e) => reject(e)}>
        Reject
      </button>
      <br />
      <br />
    </div>
  );
};

export default StaffDetails;
