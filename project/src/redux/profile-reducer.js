const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE  = 'SET_USER_PROFILE';

let initialState = {
  postData: [
    { id: 1, message: "Hi, How are you? ", likesCount: 10 },
    { id: 2, message: "It's my first post ", likesCount: 50 },
    { id: 3, message: "How are u ", likesCount: 30 },
    { id: 4, message: "Where are u from? ", likesCount: 100 },
    { id: 5, message: "The best social media ", likesCount: 6000 },
  ],
  newPostText: "Your Post",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 6,
        message: state.newPostText,
        likesCount: 0,
      };
     return { 
        ...state,
        postData: [...state.postData, newPost],
        newPostText: ""
       };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { 
        ...state,
        newPostText: action.newText
       };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}

export default profileReducer;
