import React, { Component } from "react";
import axios from "axios";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followersInfo: []
    };
  }
  
  render() {
    //this.props.info.map(function (url) {
        // axios
        //   .get(`https://cors-anywhere.herokuapp.com/${url}`)
        //   .then((res) => {
        //    let usrInfo = [];
        //     console.log("this is res", res.data);
        //     usrInfo.push(res.data);
        //     console.log("!!!!", usrInfo);
        //     this.setState({
        //       followersInfo: usrInfo
        //     });
        //   })
        //   .catch((err) => console.log(err.message));
          
      //});
    return (
      <div className="cards">
        
      <h1>here</h1>
      </div>
    );
  }
}

export default UserInfo;








