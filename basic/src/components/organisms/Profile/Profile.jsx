import React from "react";
import "./Profile.css";
import { LabelAvatar, LikeBox } from "../../molecules";
import { TextSubtitle, TextTitle, ImageAvatar } from "../../atoms";

const Profile = ({ id, url, des, name, job, isNew, totalSet, like }) => {
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
          <LikeBox totalSet={totalSet} id={id} like={like} />
        </>
      )}
    </div>
  );
};

export default Profile;
