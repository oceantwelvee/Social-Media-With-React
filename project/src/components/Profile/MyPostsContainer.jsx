// import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextCreator} from '../../redux/profile-reducer'
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostTextCreator: (text) => {
      let action = updateNewPostTextCreator(text);
        dispatch(action);
    }, 
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;
