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
      followers: []
    };
  }

  componentDidMount() {
    axios
      .get("https://cors-anywhere.herokuapp.com/https://api.github.com/users/KateAnn19")
      .then(res => {
        this.setState({
         self: res.data
        })
      })
      .catch(err => console.log(err.message));


      axios
      .get("https://cors-anywhere.herokuapp.com/https://api.github.com/users/KateAnn19/followers")
      .then(res => {
        this.setState({
          followers: res.data
        })
      })
      .catch(err => console.log(err.message));
  }

  // you can chain your axio calls to map through your friends and map again to set their url in a state array for you to use. Then you can map that state array exactly how you did your own card

//map.axios friends
//map.axios friends again
//set url in state array
//map through state array 

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
        <Users 
        usersInfo={this.state.self} 
        //location={this.state.location}
        followersInfo={this.state.followers}
        //url={this.state.url} 
        //bios={this.state.bios}
        Location={this.state.location}/>
      </div>
    );
  }
}

export default App;

