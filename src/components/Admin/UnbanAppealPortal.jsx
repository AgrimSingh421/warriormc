import React, { useEffect, useState } from "react";
import "./admincomponents.css";
import Card from "../Card";
import { db } from "../../firebase";
import { NavLink } from "react-router-dom";

const UnbanAppealPortal = () => {
  const [unbanAppeals, setUnbanAppeals] = useState([]);
  const getAppeals = async () => {
    const data = await db
      .collection("unbanappeal")
      .orderBy("createdAt", "desc")
      .get();
    const snapshot = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setUnbanAppeals(snapshot);
  };

  useEffect(() => {
    getAppeals();
  }, []);
  return (
    <div className="unbanAppealPortal container">
      <h2 align="center" className="mt-3 mb-3">
        Unban Appeal Portal
      </h2>
      <div className="appeals">
        {unbanAppeals.length > 0 ? (
          unbanAppeals.map((appeal) => {
            return (
              <NavLink to={`/unbanappeals/${appeal.id}`}>
                <Card
                  title={appeal.username}
                  description={appeal.say}
                  edited={false}
                />
              </NavLink>
            );
          })
        ) : (
          <h2>No Appeals Found</h2>
        )}
      </div>
    </div>
  );
};

export default UnbanAppealPortal;
