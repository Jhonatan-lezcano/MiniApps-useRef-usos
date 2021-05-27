import React, { useEffect, useRef, useState } from "react";
import getPost from "../helpers/getPost";

const Card = () => {
  const [post, setPost] = useState({ title: "post1" });
  const [loading, setLoading] = useState(true);
  const isMountedRef = useRef(true);

  const updatePost = () => {
    getPost().then((data) => {
      setTimeout(() => {
        if (isMountedRef.current) {
          setPost(data);
          setLoading(false);
        }
      }, 2000);
    });
  };

  useEffect(() => {
    updatePost();
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  if (loading) return <h3>loading...</h3>;

  return (
    <div>
      <h1>Card</h1>
      <h2>{post.title}</h2>
    </div>
  );
};

export default Card;
