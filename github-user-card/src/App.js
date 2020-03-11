import React from "react";
import "./App.css";
import axios from "axios";
import Users from "./users";
import LambdaLogo from "./lambdalogo.png";
import GithubLogo from "./githublogo.png";

//what data will I need?
//I will need user information:
//name
//location
//profile
//followers
//following
//bio

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      followers: [],
      followersInfo: '',
      followingInfo: ''
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/KateAnn19")
      .then(res => {
        console.log(res.data);

        this.setState({
          users: res.data
        });
      })
      .catch(err => console.log(err.message));

      axios
      .get("https://api.github.com/users/KateAnn19/followers")
      .then(res => {
        console.log(res);
        this.setState({
          followers: res.data
        })
      })
      .catch(err => console.log(err.message));

      axios
      .get("https://api.github.com/users/KateAnn19/followers/followers_url")
      .then(res => {
        console.log(res);
        this.setState({
          followersInfo: res.data
        })
      })
      .catch(err => console.log(err.message));

      axios
      .get("https://api.github.com/users/KateAnn19/followers/following_url")
      .then(res => {
        console.log(res);
        this.setState({
          followeringInfo: res.data
        })
      })
      .catch(err => console.log(err.message));
  }

  

  render() {
    return (
      <div className="container">
        <div className="header">
          <img src={LambdaLogo} alt="Lambda Logo" />
          <p>
            <span>❤️'s</span>
          </p>
          <img src={GithubLogo} alt="GitHub Logo" />
        </div>
        <Users usersInfo={this.state.users} followersInfo={this.state.followers}/>
      </div>
    );
  }
}

export default App;
