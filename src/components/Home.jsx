import React, { useEffect, useState } from "react";
import Card from "./Card";
import { db } from "../firebase";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const data = await db
      .collection("posts")
      .orderBy("createdAt", "desc")
      .get();
    const snapshot = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setPosts(snapshot);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container home">
      <div className="first_half">
        {posts.length > 0 ? (
          posts.map((post) => {
            return (
              <NavLink to={`/post/${post.id}`}>
                <Card
                  title={post.title}
                  description={post.description}
                  edited={post.edited}
                />
              </NavLink>
            );
          })
        ) : (
          <h2>No Posts Found!</h2>
        )}
      </div>
      <div className="second_half">
        <iframe
          src="https://discord.com/widget?id=1237029851731464322&theme=dark"
          width="350"
          height="500"
          allowtransparency="true"
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
