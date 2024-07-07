import React from "react";
import { useDispatch } from "react-redux";
import { deletePost, setEditingPost } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const PostItem = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = () => {
    dispatch(setEditingPost(post));
    navigate("/edit-post");
  };

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  return (
    <div className="post-item">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      {post.media &&
        (post.media.type.startsWith("image/") ? (
          <img
            src={URL.createObjectURL(post.media)}
            alt={post.title}
            className="post-media"
          />
        ) : (
          <video controls className="post-media">
            <source
              src={URL.createObjectURL(post.media)}
              type={post.media.type}
            />
            Your browser does not support the video tag.
          </video>
        ))}
      <br />
      <div>
        <button onClick={handleEdit} className="edit-button">
          Edit
        </button>
        <button
          onClick={handleDelete}
          style={{ marginLeft: "10px", backgroundColor: "#dc3545" }}
          className="delete-button"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostItem;
