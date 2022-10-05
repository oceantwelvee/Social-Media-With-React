import React from "react";
import MyPostsContainer from "./MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import s from "./Profile.module.css";

const Profile = (props) => {
   
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;
