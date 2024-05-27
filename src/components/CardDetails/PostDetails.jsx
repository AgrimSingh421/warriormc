import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { auth, db, storage } from "../../firebase";
import "../components.css";

const PostDetails = () => {
  const [postData, setPostData] = useState({});
  const { postid } = useParams();

  db.collection("posts")
    .doc(postid)
    .get()
    .then((doc) => {
      setPostData(doc.data());
    });

  const deletePost = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmDelete) {
      db.collection("posts")
        .doc(postid)
        .delete()
        .then(() => {
          console.log("Post deleting in progress...");
        });

      storage
        .ref()
        .child(`/image/${postData.imageUid}`)
        .delete()
        .then(() => {
          console.log("Image deleted successfully");
        });

      alert("Post deleted successfully");
      window.location.replace("/");
    }
  };
  return (
    <div className="post container">
      <h2 align="center" className="mt-3 mb-5">
        {postData.title}
      </h2>
      {postData.imageURL ? (
        <div className="postImageDiv">
          <img
            src={postData.imageURL}
            alt={postData.title}
            className="postImage"
          />
        </div>
      ) : (
        <p>No image was attached to this post.</p>
      )}
      <br />
      <p className="mb-3">{postData.description}</p>
      <p align="right" className="mr-1">
        <i>
          Posted by <b>{postData.authorName}</b>
        </i>
      </p>
      {postData.author === auth.currentUser.uid ||
      auth.currentUser.uid == "5wACFlcBMbST5hz3Atx7tCgBJV13" ? (
        <>
          <button className="btn btn-danger mr-2" onClick={deletePost}>
            Delete Post
          </button>
          <NavLink to={`/edit/${postid}`} className="btn btn-primary">
            Edit Post
          </NavLink>
        </>
      ) : null}
      <br /> <br />
    </div>
  );
};

export default PostDetails;
