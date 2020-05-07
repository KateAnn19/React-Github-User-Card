import React, { Component } from "react";


class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {  
    };
  }
  render() {
  
    return (
      
      <div className="cards">
        <div className="card">
        
          <div className="card-info">
            <img
              src={this.props.usersInfo.avatar_url}
              alt={`${this.props.usersInfo.name}`}
            />
            <h3 className="name">{this.props.usersInfo.name}</h3>
            <h2 className="username">{this.props.usersInfo.login}</h2>

            <p>Location: {this.props.usersInfo.location}</p>
            <p>Followers: {this.props.usersInfo.followers}</p>
            <p>Following: {this.props.usersInfo.following}</p>
            <p>Bio: {this.props.usersInfo.bio}</p>
          </div>
        </div>
        
        {this.props.followersInfo.map((follower) => (
          <div key={follower.id} className="card">
            <div className="card-info">
              <img src={follower.avatar_url} alt={follower.login} />
              <h3 className="name">Name</h3>
              <h2 className="username">{follower.login}</h2>
              <p>Bio:{follower.bios}</p>
              <p>Location: {this.props.location}</p>
              <p>Followers: </p>
              <p>Following: </p>
            </div>
          </div>
        ))}
        
      </div>
      
    );
  }
}

export default Users;
