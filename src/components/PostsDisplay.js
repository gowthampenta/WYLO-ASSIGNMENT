import React from "react";
import { useSelector } from "react-redux";
import PostItem from "./PostItem";

const PostsDisplay = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsDisplay;
