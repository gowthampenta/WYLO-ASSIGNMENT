import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost, updatePost, setEditingPost } from "../redux/actions";

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editingPost = useSelector((state) => state.editingPost);
  const [title, setTitle] = useState(editingPost ? editingPost.title : "");
  const [content, setContent] = useState(
    editingPost ? editingPost.content : ""
  );
  const [media, setMedia] = useState(editingPost ? editingPost.media : null);

  useEffect(() => {
    return () => {
      dispatch(setEditingPost(null));
    };
  }, [dispatch]);

  const handleMediaChange = (e) => {
    setMedia(e.target.files[0]);
  };

  const handleRemoveMedia = () => {
    setMedia(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: editingPost ? editingPost.id : Date.now(),
      title,
      content,
      media,
    };
    if (editingPost) {
      dispatch(updatePost(newPost));
    } else {
      dispatch(addPost(newPost));
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input
        type="file"
        accept="image/*,video/*"
        onChange={handleMediaChange}
      />
      {media && (
        <div>
          {media.type.startsWith("image/") ? (
            <img
              src={URL.createObjectURL(media)}
              alt="media"
              className="post-media"
            />
          ) : (
            <video controls className="post-media">
              <source src={URL.createObjectURL(media)} type={media.type} />
              Your browser does not support the video tag.
            </video>
          )}
          <br />
          <button
            type="button"
            onClick={handleRemoveMedia}
            className="remove-button"
          >
            Remove Media
          </button>
        </div>
      )}
      <button type="submit">
        {editingPost ? "Update Post" : "Create Post"}
      </button>
    </form>
  );
};

export default CreatePost;
