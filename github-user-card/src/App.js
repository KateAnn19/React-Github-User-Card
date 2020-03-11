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
      moreInfo: [],
      followersInfo: '',
      followingInfo: '',
      // bios:'',
      name: '',
      location: '',
      Followers: '',
      following: ''
    };
  }

  componentDidMount() {


    axios
      .get("https://api.github.com/users/KateAnn19")
      .then(res => {
        this.setState({
          users: res.data
        });
      })
      .catch(err => console.log(err.message));





      axios
      .get("https://api.github.com/users/KateAnn19/followers")
      .then(res => {
        console.log('this is response from followers', res)
        res.data.map(followers => (
           




           axios
            .get(followers.url)
            .then(response => {
             console.log("this is response", response)
            //  response.map(foll =>(

               this.setState({
              //  moreInfo: response.data,
              //  followers: response.data.followers,
               //following: response.data.following,
               //location: response.data.location,
               bios: response.data.bio,
               name: response.data.name,
               location: response.data.location,
               Followers: response.data.followers,
               following: response.data.following
             })
            })
            .catch(err => console.log(err.message))

        ))
             
            
           
        //))
        
        this.setState({
          followers: res.data,
          moreInfo: res.data.followers
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
        location={this.state.location}
        followingNumbers={this.state.following}
        followersNumbers={this.state.followers}
        followersInfo={this.state.followers}
        url={this.state.url} 
        bios={this.state.bios}
        Location={this.state.location}/>
      </div>
    );
  }
}

export default App;
