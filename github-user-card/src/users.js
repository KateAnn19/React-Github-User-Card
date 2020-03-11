import React from "react";

const Users = props => {
  console.log("this is props", props);
  return (
    <div className="cards">
      <div className="card">
        <div className="card-info">
          <img
            src={props.usersInfo.avatar_url}
            alt={`${props.usersInfo.name}`}
          />
          <h3 className="name">{props.usersInfo.name}</h3>
          <h2 className="username">{props.usersInfo.login}</h2>

          <p>Location: {props.usersInfo.location}</p>
          <p>Followers: {props.usersInfo.followers}</p>
          <p>Following: {props.usersInfo.following}</p>
          <p>Bio: {props.usersInfo.bio}</p>
        </div>
      </div>

      {props.followersInfo.map(follower => (
        <div key={follower.id} className="card">
          <div className="card-info">
            <img src={follower.avatar_url} alt={follower.login} />
            <h2 className="username">{follower.login}</h2>
            <p>Location: {follower.location}</p>
            <p>Followers: {follower.followers_url}</p>
            <p>Following: {follower.following_url}</p>
            {/* <p>Bio: {props.follower.bio}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;


