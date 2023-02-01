import React from "react";

export const Profile = ({ url, des, name, job, isNew }) => {
  console.log(url);
  return (
    <div className="profile">
      {isNew && <span className="label_new">new!</span>}
      {url === undefined ? (
        <h1>none!</h1>
      ) : (
        <>
          <img className="photo" src={url} alt={des} />
          <h1>{name}</h1>
          <p>{job}</p>
        </>
      )}
    </div>
  );
};
