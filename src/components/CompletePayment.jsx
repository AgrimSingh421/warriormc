import React from "react";
import imgurl from "../img/phonepeqr.png";

const CompletePayment = () => {
  return (
    <div className="completePayment container">
      <h2 align="center" className="mt-3 mb-4">
        Complete Payment
      </h2>
      <p>
        Due to some issues, we do not have a proper payment method integrated to
        our websites. That's why we are accepting payments on <b>Google Pay</b>,{" "}
        <b>PhonePe</b> and <b>Bitcoins</b>. You have to follow some steps to get
        a complete payment
      </p>
      <br />
      <p>
        <b>Step 1:</b> Transfer the money required to buy a rank or gems.
      </p>
      <p>
        <b>Step 2:</b> Take a screenshot of it.
      </p>
      <p>
        <b>Step 3:</b> Send the screenshot to our discord server on the{" "}
        <b>buy-rank</b> channel with your Minecraft username.
      </p>
      <br />
      <p>
        If your payment was successful, you will get your respective rank or
        gems under 24 hours of your payment. If we are failed to do so, you will
        get a 20% money return with your rank or gems.
      </p>
      <br />
      <p align="center">
        <b>Google Pay ID:</b> raghavlove304@okhdfcbank
      </p>
      <br />
      <p align="center">
        <b>PhonePe QR:</b>
      </p>
      <div className="qrdiv">
        <img src={imgurl} alt="PhonePe QR" className="qr" />
      </div>
      <br />
      <p align="center">
        <b>Bitcoin Wallet Address:</b>{" "}
        bc1quv4dd7frqdzttwt2qx0kn7m9wh5pywa789uljp
      </p>
      <span>
        <b>Note:</b> Only send bitcoins to this address! Other cryptocurrencies
        might not reach to the wallet and payment may be cancelled.
      </span>
      <br />
      <br />
    </div>
  );
};

export default CompletePayment;
