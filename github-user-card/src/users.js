import React from "react";
import axios from "axios";

const Users = props => {
    console.log("PROPSPROPSPORPS",props)
  
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
            <h3 className="name">Name</h3>
            <h2 className="username">{follower.login}</h2>
            <p>Bio:{follower.bios}</p>
            <p>Location: {props.location}</p>
            <p>Followers: </p>
            <p>Following: </p>
          </div>
        </div>
        


      ))}

{/* {props.bios.map(bio => (
        <div>
          <div>
          <p>Bio: {bio.bio}</p>
          </div>
        </div>
      ))} */}

      
          <div>
            <p>Bio: {props.bio}</p>
          </div>
    </div>
  );
};

export default Users;


