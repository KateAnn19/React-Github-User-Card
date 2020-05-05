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
      users: [],
      followers: [],
      test: [],
      info: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/KateAnn19")
      .then(res => {
        this.setState({
          users: res.data
        })
      return this.state.users
      })
      .catch(err => console.log(err.message));


      axios
      .get("https://api.github.com/users/KateAnn19/followers")
      .then(res => {

        this.setState({
          followers: res.data
        })
        return this.state.followers
      })
       
       .then(result => {
        console.log("RESULT RESULT RESULT", result)
        result.map(foll => {
          axios
          .get(foll.url)
          .then(res => {
            console.log('RES RES RES!!!!!', res)
            let newArray = []
            newArray.push(res)
            console.log("!!!!!!!!!!!!!!!!!!!!", newArray)
            this.setState({
              info: [res.data]
            })
          })
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
        usersInfo={this.state.users} 
        //location={this.state.location}
        test={this.state.info}
        followersInfo={this.state.followers}
        //url={this.state.url} 
        //bios={this.state.bios}
        Location={this.state.location}/>
      </div>
    );
  }
}

export default App;

