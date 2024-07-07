import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import PostsDisplay from "./components/PostsDisplay";
import CreatePost from "./components/CreatePost";

const App = () => {
  return (
    <div className="App">
      <h1>Post Management</h1>
      <Routes>
        <Route path="/" element={<PostsDisplay />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/edit-post" element={<CreatePost />} />
      </Routes>
      <div className="create-post-button">
        <Link to="/create-post">
          <button>Create Post</button>
        </Link>
      </div>
    </div>
  );
};

export default App;
