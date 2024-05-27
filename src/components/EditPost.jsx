import React, { useEffect, useState } from "react";
import "./components.css";
import { auth, db, serverTimestamp } from "../firebase";
import { useParams } from "react-router-dom";

const EditPost = ({ user }) => {
  const [editData, setEditData] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { editpostid } = useParams();

  useEffect(() => {
    db.collection("posts")
      .doc(editpostid)
      .get()
      .then((doc) => {
        setEditData(doc.data());
        setTitle(doc.data().title);
        setDescription(doc.data().description);
      });
  }, []);

  const submit = async (e) => {
    if (!title || !description) {
      alert("Please fill all the fields properly!");
    } else {
      try {
        await db.collection("posts").doc(editpostid).set({
          title,
          description,
          author: editData.author,
          authorName: editData.authorName,
          imageURL: editData.imageURL,
          imageUid: editData.imageUid,
          createdAt: serverTimestamp(),
          edited: true,
        });
        alert("Post edit successful!");
        window.location.replace(`/`);
      } catch (error) {
        alert(`An error occurred: ${error.message}`);
      }
    }
  };
  return (
    <div className="createAPost container">
      <h2 align="center" className="mt-3">
        Create a Post
      </h2>
      <div className="createAPostFields">
        <div className="post_title">
          <label htmlFor="title">Post Title: &nbsp;</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the Title"
          />
        </div>
        <div className="post_description">
          <label htmlFor="description">Post Description: &nbsp;</label>
          <textarea
            name="description"
            id="description"
            rows={9}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter the Description"
          ></textarea>
        </div>
        <div className="submit_btn">
          <button className="btn btn-success mb-3" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
