import React from "react";
import s from "./MyPosts.module.css";
import Post from "./MyPosts/Post/Post";

const MyPosts = (props) => {
  let postsElements = props.postData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostTextCreator(text);
  };

  return (
    <div className={s.postBlock}>
      <h3> My Posts </h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}> Add Post </button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
