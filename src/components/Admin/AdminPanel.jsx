import React, { useEffect, useState } from "react";
import "./admincomponents.css";
import { db } from "../../firebase";

const AdminPanel = ({ user }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [yourPosts, setYourPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((doc) => {
          setAllPosts((prev) => {
            return [...prev, doc.data()];
          });
        });
      });

    db.collection("posts")
      .where("author", "==", user.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((doc) => {
          setYourPosts((prev) => {
            return [...prev, doc.data()];
          });
        });
      });
  }, []);
  return (
    <div className="adminPanel container">
      <h2 align="center" className="mt-3 mb-5">
        Welcome back, {user.displayName}!
      </h2>
      <div className="posts">
        <div className="totalPosts">
          <h2>{allPosts.length}</h2>
          <p>Total Posts</p>
        </div>
        <div className="yourPosts">
          <h2>{yourPosts.length}</h2>
          <p>Your Posts</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
