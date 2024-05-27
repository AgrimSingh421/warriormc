import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";

const ReportDetails = () => {
  const [reportData, setReportData] = useState({});
  const { reportid } = useParams();

  useEffect(() => {
    db.collection("playerreports")
      .doc(reportid)
      .get()
      .then((doc) => {
        setReportData(doc.data());
      });
  }, []);

  const deleteReport = () => {
    db.collection("playerreports").doc(reportid).delete().then();
  };
  return (
    <div className="reportDetails container">
      <h2 align="center" className="mb-3">
        Report of player, "{reportData.playerName}"
      </h2>
      <span>
        <b>What did the player do?</b>
      </span>
      <br />
      <span>
        <b>{">"}</b> {reportData.did}
      </span>
      <br /> <br />
      <span>
        <i>
          Report by{" "}
          <b>
            {reportData.authorName} ({reportData.author})
          </b>
        </i>
      </span>
      <br />
      <hr />
      <br />
      <h2>Reviewed this report?</h2>
      <button className="btn btn-danger" onClick={deleteReport}>
        Delete this report
      </button>
    </div>
  );
};

export default ReportDetails;
