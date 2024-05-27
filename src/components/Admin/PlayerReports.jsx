import React, { useEffect, useState } from "react";
import "./admincomponents.css";
import Card from "../Card";
import { db } from "../../firebase";
import { NavLink } from "react-router-dom";

const PlayerReports = () => {
  const [playerReports, setPlayerReports] = useState([]);
  const getReports = async () => {
    const data = await db
      .collection("playerreports")
      .orderBy("createdAt", "desc")
      .get();
    const snapshot = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setPlayerReports(snapshot);
  };

  useEffect(() => {
    getReports();
  }, []);
  return (
    <div className="staffApplications container">
      <h2 align="center" className="mt-3 mb-3">
        Player Reports
      </h2>
      <div className="applications">
        {playerReports.length > 0 ? (
          playerReports.map((report) => {
            return (
              <NavLink to={`/report/${report.id}`}>
                <Card
                  title={report.playerName}
                  description={report.did}
                  edited={false}
                />
              </NavLink>
            );
          })
        ) : (
          <h2>No Player Reports Found!</h2>
        )}
      </div>
    </div>
  );
};

export default PlayerReports;
