import React, { Component } from "react";
import axios from "axios";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props)
    return (
      <div className="cards">
        <h1>here</h1>
      </div>
    );
  }
}

export default UserInfo;
