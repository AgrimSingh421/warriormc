import React, { useEffect, useState } from "react";
import "./components.css";
import { NavLink } from "react-router-dom";

const Store = () => {
  const [ip, setIP] = useState("");
  const [location, setLocation] = useState({});

  const country = location.country;

  const getVisitorIP = async () => {
    try {
      const response = await fetch("https://api.ipify.org");
      const data = await response.text();
      setIP(data);
    } catch (error) {
      console.log(`An error occurred: ${error.message}`);
    }
  };

  const getUserLocation = async () => {
    try {
      const response = await fetch(`http://ip-api.com/json/${ip}`);
      const data = await response.json();
      setLocation(data);
    } catch (error) {
      console.log(`An error occurred: ${error.message}`);
    }
  };

  useEffect(() => {
    getVisitorIP();
    getUserLocation();
  }, []);
  return (
    <div className="store container">
      <h2 align="center" className="mt-3">
        Warrior MC Store
      </h2>
      <p className="offer"></p>
      <div className="buyRanks">
        <h3 className="mb-3">Buy Ranks</h3>
        <div className="iron">
          <p>
            Iron -{" "}
            {country === "India" ||
            country === "Pakistan" ||
            country === "Nepal" ||
            country === "Bhutan" ||
            country === "Bangladesh" ||
            country === "Myanmar" ||
            country === "Sri Lanka" ? (
              <span>
                INR 120 <strike>150</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : country === "United Kingdom" || country === "England" ? (
              <span>
                POUND 1.13 <strike>1.41</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : country === "Germany" ||
              country === "Italy" ||
              country === "France" ||
              country === "Spain" ||
              country === "Greece" ||
              country === "Portugal" ||
              country === "Ireland" ||
              country === "Belgium" ||
              country === "Netherlands" ||
              country === "Finland" ||
              country === "Vatican City" ? (
              <span>
                EUR 1.33 <strike>1.66</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : (
              <span>
                USD 1.44 <strike>1.80</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            )}
            OR 0.000021 BTC
          </p>
          <NavLink to="/store/completepayment" className="btn btn-primary">
            Buy Now!
          </NavLink>
        </div>
        <div className="gold">
          <p>
            Gold -{" "}
            {country === "India" ||
            country === "Pakistan" ||
            country === "Nepal" ||
            country === "Bhutan" ||
            country === "Bangladesh" ||
            country === "Myanmar" ||
            country === "Sri Lanka" ? (
              <span>
                INR 220 <strike>275</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : country === "United Kingdom" || country === "England" ? (
              <span>
                POUND 2.07 <strike>2.59</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : country === "Germany" ||
              country === "Italy" ||
              country === "France" ||
              country === "Spain" ||
              country === "Greece" ||
              country === "Portugal" ||
              country === "Ireland" ||
              country === "Belgium" ||
              country === "Netherlands" ||
              country === "Finland" ||
              country === "Vatican City" ? (
              <span>
                EUR 2.43 <strike>3.04</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : (
              <span>
                USD 2.65 <strike>3.31</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            )}
            OR 0.000039 BTC
          </p>
          <NavLink to="/store/completepayment" className="btn btn-primary">
            Buy Now!
          </NavLink>
        </div>
        <div className="diamond">
          <p>
            Diamond -{" "}
            {country === "India" ||
            country === "Pakistan" ||
            country === "Nepal" ||
            country === "Bhutan" ||
            country === "Bangladesh" ||
            country === "Myanmar" ||
            country === "Sri Lanka" ? (
              <span>
                INR 360 <strike>450</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : country === "United Kingdom" || country === "England" ? (
              <span>
                POUND 3.39 <strike>4.23</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : country === "Germany" ||
              country === "Italy" ||
              country === "France" ||
              country === "Spain" ||
              country === "Greece" ||
              country === "Portugal" ||
              country === "Ireland" ||
              country === "Belgium" ||
              country === "Netherlands" ||
              country === "Finland" ||
              country === "Vatican City" ? (
              <span>
                EUR 3.98 <strike>4.98</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : (
              <span>
                USD 4.33 <strike>5.41</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            )}
            OR 0.000064 BTC
          </p>
          <NavLink to="/store/completepayment" className="btn btn-primary">
            Buy Now!
          </NavLink>
        </div>
        <div className="emerald">
          <p>
            Emerald -{" "}
            {country === "India" ||
            country === "Pakistan" ||
            country === "Nepal" ||
            country === "Bhutan" ||
            country === "Bangladesh" ||
            country === "Myanmar" ||
            country === "Sri Lanka" ? (
              <span>
                INR 540 <strike>675</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : country === "United Kingdom" || country === "England" ? (
              <span>
                POUND 5.08 <strike>6.35</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : country === "Germany" ||
              country === "Italy" ||
              country === "France" ||
              country === "Spain" ||
              country === "Greece" ||
              country === "Portugal" ||
              country === "Ireland" ||
              country === "Belgium" ||
              country === "Netherlands" ||
              country === "Finland" ||
              country === "Vatican City" ? (
              <span>
                EUR 5.97 <strike>7.46</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : (
              <span>
                USD 6.49 <strike>8.12</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            )}
            OR 0.000096 BTC
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
            520 Gems -{" "}
            {country === "India" ||
            country === "Pakistan" ||
            country === "Nepal" ||
            country === "Bhutan" ||
            country === "Bangladesh" ||
            country === "Myanmar" ||
            country === "Sri Lanka" ? (
              <span>
                INR 240 <strike>300</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : country === "United Kingdom" || country === "England" ? (
              <span>
                POUND 2.26 <strike>2.82</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : country === "Germany" ||
              country === "Italy" ||
              country === "France" ||
              country === "Spain" ||
              country === "Greece" ||
              country === "Portugal" ||
              country === "Ireland" ||
              country === "Belgium" ||
              country === "Netherlands" ||
              country === "Finland" ||
              country === "Vatican City" ? (
              <span>
                EUR 2.65 <strike>3.32</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : (
              <span>
                USD 2.89 <strike>3.61</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            )}
            OR 0.000043 BTC
          </p>
          <NavLink to="/store/completepayment" className="btn btn-primary">
            Buy Now!
          </NavLink>
        </div>
        <div className="gem2">
          <p>
            1040 Gems -{" "}
            {country === "India" ||
            country === "Pakistan" ||
            country === "Nepal" ||
            country === "Bhutan" ||
            country === "Bangladesh" ||
            country === "Myanmar" ||
            country === "Sri Lanka" ? (
              <span>
                INR 530 <strike>715</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : country === "United Kingdom" || country === "England" ? (
              <span>
                POUND 4.99 <strike>6.73</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : country === "Germany" ||
              country === "Italy" ||
              country === "France" ||
              country === "Spain" ||
              country === "Greece" ||
              country === "Portugal" ||
              country === "Ireland" ||
              country === "Belgium" ||
              country === "Netherlands" ||
              country === "Finland" ||
              country === "Vatican City" ? (
              <span>
                EUR 5.75 <strike>7.91</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : (
              <span>
                USD 6.37 <strike>8.60</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            )}
            OR 0.000094 BTC
          </p>
          <NavLink to="/store/completepayment" className="btn btn-primary">
            Buy Now!
          </NavLink>
        </div>
        <div className="gem3">
          <p>
            2060 (+40 bonus) Gems -{" "}
            {country === "India" ||
            country === "Pakistan" ||
            country === "Nepal" ||
            country === "Bhutan" ||
            country === "Bangladesh" ||
            country === "Myanmar" ||
            country === "Sri Lanka" ? (
              <span>
                INR 760 <strike>1000</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : country === "United Kingdom" || country === "England" ? (
              <span>
                POUND 7.15 <strike>9.41</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : country === "Germany" ||
              country === "Italy" ||
              country === "France" ||
              country === "Spain" ||
              country === "Greece" ||
              country === "Portugal" ||
              country === "Ireland" ||
              country === "Belgium" ||
              country === "Netherlands" ||
              country === "Finland" ||
              country === "Vatican City" ? (
              <span>
                EUR 8.40 <strike>11.06</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : (
              <span>
                USD 9.14 <strike>12.02</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            )}
            OR 0.00014 BTC
          </p>
          <NavLink to="/store/completepayment" className="btn btn-primary">
            Buy Now!
          </NavLink>
        </div>
        <div className="gem4">
          <p>
            4080 (+80 bonus) Gems -{" "}
            {country === "India" ||
            country === "Pakistan" ||
            country === "Nepal" ||
            country === "Bhutan" ||
            country === "Bangladesh" ||
            country === "Myanmar" ||
            country === "Sri Lanka" ? (
              <span>
                INR 1020 <strike>1275</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : country === "United Kingdom" || country === "England" ? (
              <span>
                POUND 9.60 <strike>12.00</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : country === "Germany" ||
              country === "Italy" ||
              country === "France" ||
              country === "Spain" ||
              country === "Greece" ||
              country === "Portugal" ||
              country === "Ireland" ||
              country === "Belgium" ||
              country === "Netherlands" ||
              country === "Finland" ||
              country === "Vatican City" ? (
              <span>
                EUR 11.28 <strike>14.10</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            ) : (
              <span>
                USD 12.27 <strike>15.33</strike>{" "}
                <span className="discount">20% off </span>
              </span>
            )}
            OR 0.00018 BTC
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
