import React from "react";
import "./Profile.css";
import { LabelAvatar, LikeBox } from "../../molecules";
import { TextSubtitle, TextTitle, ImageAvatar } from "../../atoms";

const Profile = ({ url, des, name, job, isNew }) => {
  return (
    <div className="profile">
      {isNew && <LabelAvatar />}
      {url === undefined ? (
        <TextTitle content="none" />
      ) : (
        <>
          <ImageAvatar url={url} alt={des} />
          <TextTitle content={name} />
          <TextSubtitle content={job} />
          <LikeBox />
        </>
      )}
    </div>
  );
};

export default Profile;
