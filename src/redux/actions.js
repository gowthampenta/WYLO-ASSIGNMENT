export const addPost = (post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};

export const updatePost = (post) => {
  return {
    type: "UPDATE_POST",
    payload: post,
  };
};

export const deletePost = (id) => {
  return {
    type: "DELETE_POST",
    payload: id,
  };
};

export const setEditingPost = (post) => {
  return {
    type: "SET_EDITING_POST",
    payload: post,
  };
};
