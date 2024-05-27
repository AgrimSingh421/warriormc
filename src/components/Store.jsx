import React from "react";
import "./components.css";
import { NavLink } from "react-router-dom";

const Store = () => {
  return (
    <div className="store container">
      <h2 align="center" className="mt-3">
        Warrior MC Store
      </h2>
      <p className="offer">
        <marquee>
          * <b>Special Offer!</b> Get 20% off on all ranks and gems.
        </marquee>
      </p>
      <div className="buyRanks">
        <h3 className="mb-3">Buy Ranks</h3>
        <div className="iron">
          <p>
            Iron - ₹120 <strike>₹150</strike>{" "}
            <span className="discount">(20% off!)</span>
          </p>
          <NavLink to="/store/completepayment" className="btn btn-primary">
            Buy Now!
          </NavLink>
        </div>
        <div className="gold">
          <p>
            Gold - ₹220 <strike>₹275</strike>{" "}
            <span className="discount">(20% off!)</span>
          </p>
          <NavLink to="/store/completepayment" className="btn btn-primary">
            Buy Now!
          </NavLink>
        </div>
        <div className="diamond">
          <p>
            Diamond - ₹360 <strike>₹450</strike>{" "}
            <span className="discount">(20% off!)</span>
          </p>
          <NavLink to="/store/completepayment" className="btn btn-primary">
            Buy Now!
          </NavLink>
        </div>
        <div className="emerald">
          <p>
            Emerald - ₹540 <strike>₹675</strike>{" "}
            <span className="discount">(20% off!)</span>
          </p>
          <NavLink to="/store/completepayment" className="btn btn-primary">
            Buy Now!
          </NavLink>
        </div>
      </div>
      <div className="buyRanks">
        <h3 className="mb-3">Buy Gems</h3>
        <div className="gem1">
          <p>
            520 Gems - ₹240 <strike>₹300</strike>{" "}
            <span className="discount">(20% off!)</span>
          </p>
          <NavLink to="/store/completepayment" className="btn btn-primary">
            Buy Now!
          </NavLink>
        </div>
        <div className="gem2">
          <p>
            1040 Gems - ₹530 <strike>₹715</strike>{" "}
            <span className="discount">(20% off!)</span>
          </p>
          <NavLink to="/store/completepayment" className="btn btn-primary">
            Buy Now!
          </NavLink>
        </div>
        <div className="gem3">
          <p>
            2060 (+40 bonus) Gems - ₹760 <strike>₹1000</strike>{" "}
            <span className="discount">(20% off!)</span>
          </p>
          <NavLink to="/store/completepayment" className="btn btn-primary">
            Buy Now!
          </NavLink>
        </div>
        <div className="gem4">
          <p>
            4080 (+80 bonus) Gems - ₹1020 <strike>₹1275</strike>{" "}
            <span className="discount">(20% off!)</span>
          </p>
          <NavLink to="/store/completepayment" className="btn btn-primary">
            Buy Now!
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Store;
