import React from "react";
import "./App.css";
import axios from "axios";
import Users from "./users";
import LambdaLogo from "./lambdalogo.png";
import GithubLogo from "./githublogo.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      self: "",
      followers: [],
      users:""
    };
    this.handleChanges = this.handleChanges.bind(this);
    this.fetchUsers = this.fetchUsers.bind(this);
  }
  //https://cors-anywhere.herokuapp.com/
  componentDidMount() {
    axios
      .get("https://api.github.com/users/KateAnn19")
      .then((res) => {
        this.setState({
          self: res.data,
        });
      })
      .catch((err) => console.log(err.message));

    axios
      .get("https://api.github.com/users/KateAnn19/followers")
      .then((res) => {
        // res.data.map(function (i) {
        //   return info.push(i.url);
        // });
        this.setState({
          ...this.state,
          followers: res.data,
        });
        // let usrInfo = [];
        // this.state.followers.map(function (follower) {
        //   axios
        //     .get(`${follower.url}`)
        //     .then((res) => {
        //       console.log("this is response", res.data.followers);
        //       usrInfo.push({followers: res.data.followers, location: res.data.location, following: res.data.following, bio: res.data.bio, name:res.data.name});
        //       console.log("This is user info",usrInfo)
        //       this.setState({
        //         ...this.state,
        //         individualInfo: usrInfo,
        //       });
        //     })
        //     .catch((err) => console.log(err.message));
        //   return usrInfo;
        // });
      })
      .catch((err) => console.log(err.message));
  }

  // you can chain your axio calls to map through your friends and map again to set their url in a state array for you to use. Then you can map that state array exactly how you did your own card

  handleChanges = e => {
    this.setState({
      user: e.target.value
    });
  };

  fetchUsers = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.user}`)
      .then(response => {
        console.log(response.data);
        //response.data.message (an array)
        this.setState({ self: response.data });

        axios
          .get(`https://api.github.com/users/${this.state.user}/followers`)
          .then(response => {
            this.setState({ ...this.state, followers: response.data });
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <p>
         <img src={LambdaLogo} alt={"Lambda"}/> <span>❤️'s</span> <img src={GithubLogo} alt={"Github"}/>
          </p>
        </div>
        <div>
          <input
            type="text"
            name=""
            value={this.state.user}
            onChange={this.handleChanges}
          />
          <button onClick={this.fetchUsers}>Display Users</button>
        </div>
        <Users
          usersInfo={this.state.self}
          followersInfo={this.state.followers}
          individualInfo={this.state.individualInfo}
          Location={this.state.location}
        />
        </div>
    );
  }
}

export default App;
