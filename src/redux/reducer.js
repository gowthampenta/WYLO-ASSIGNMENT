const initialState = {
  posts: [],
  editingPost: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case "UPDATE_POST":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case "SET_EDITING_POST":
      return {
        ...state,
        editingPost: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
