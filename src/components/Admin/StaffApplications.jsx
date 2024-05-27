import React, { useEffect, useState } from "react";
import "./admincomponents.css";
import Card from "../Card";
import { db } from "../../firebase";
import { NavLink } from "react-router-dom";

const StaffApplications = () => {
  const [staffApplications, setStaffApplications] = useState([]);
  const getApplications = async () => {
    const data = await db
      .collection("staffapplications")
      .orderBy("createdAt", "desc")
      .get();
    const snapshot = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setStaffApplications(snapshot);
  };

  useEffect(() => {
    getApplications();
  }, []);
  return (
    <div className="staffApplications container">
      <h2 align="center" className="mt-3 mb-3">
        Staff Applications
      </h2>
      <div className="applications">
        {staffApplications.length > 0 ? (
          staffApplications.map((application) => {
            return (
              <NavLink to={`/applications/${application.id}`}>
                <Card
                  title={application.username}
                  description={application.description}
                  edited={false}
                />
              </NavLink>
            );
          })
        ) : (
          <h2>No Staff Applications Found!</h2>
        )}
      </div>
    </div>
  );
};

export default StaffApplications;
