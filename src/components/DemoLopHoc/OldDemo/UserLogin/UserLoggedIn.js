import React, { Component } from "react";

export default class UserLoggedIn extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1> Welcome to the deep web!!!</h1>
        <button onClick={this.props.onLogOut}>Log out</button>
      </div>
    );
  }
}
