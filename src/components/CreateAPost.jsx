import React, { useEffect, useState } from "react";
import "./components.css";
import { auth, db, serverTimestamp, storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";

const CreateAPost = ({ user }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [imageProgress, setImageProgress] = useState(0);
  const [imageUid, setImageUid] = useState(uuidv4());
  const [author, setAuthor] = useState(user.displayName);

  useEffect(() => {
    if (url) {
      try {
        db.collection("posts")
          .add({
            title,
            description,
            author: auth.currentUser.uid,
            authorName: auth.currentUser.displayName,
            imageURL: url,
            imageUid,
            createdAt: serverTimestamp(),
            edited: false,
          })
          .then(() => {
            alert("The post has been published successfully!");
            setTitle("");
            setDescription("");
          });
      } catch (error) {
        console.log(`An error occurred: ${error.message}`);
      }
    }
  }, [url]);

  const submit = async (e) => {
    if (!title || !description || !author) {
      alert("Please fill all the fields properly!");
    } else {
      try {
        var uploadTask = storage.ref().child(`image/${imageUid}`).put(image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            var progress = Math.floor(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setImageProgress(progress);
            if (progress == "100") {
              alert("Image Upload Successful!");
            }
          },
          (error) => {
            console.log(`An error occurred: ${error.message}`);
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              console.log(`Upload link: ${downloadURL}`);
              setUrl(downloadURL);
            });
          }
        );
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
        <div className="post_image">
          <label htmlFor="image">Image: </label>
          <input
            type="file"
            name="image"
            id="image"
            className="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="post_imageProgress">
          <label htmlFor="progress">Image Upload Progress:</label>
          <br />
          <progress
            id="progress"
            value={imageProgress}
            max={100}
          ></progress>{" "}
          <span>{imageProgress}%</span>
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
        <div className="post_author">
          <label htmlFor="author">Post Author: </label>
          <input
            type="text"
            name="author"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter Post Author"
            disabled
          />
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

export default CreateAPost;
