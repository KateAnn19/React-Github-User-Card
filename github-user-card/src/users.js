import React, { Component } from "react";
import axios from "axios";
import UserInfo from "./UserInfo";



class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followersUrls: [],
      followersInfo: []
    };
  }
  
  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.github.com/users/KateAnn19/followers"
      )
      .then((res) => {
        let info = [];
        res.data.map(function (i) {
          return info.push(i.url);
        });
        this.setState({
          followersUrls: info,
        });
        let usrInfo = [];
        this.state.followersUrls.map(function (url) {
          axios
            .get(`https://cors-anywhere.herokuapp.com/${url}`)
            .then((res) => {
             
              //console.log("this is res", res.data);
              usrInfo.push(res.data);
              //console.log("!!!!", usrInfo);
              this.setState({
                followersInfo: usrInfo
              });
            })
            .catch((err) => console.log(err.message));
            return usrInfo
        });
      })
      .catch((err) => console.log(err.message));
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
        <UserInfo info={this.state.followersInfo} />
      </div>
    );
  }
}

export default Users;
