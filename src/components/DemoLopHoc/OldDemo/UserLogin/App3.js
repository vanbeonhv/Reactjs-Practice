import React, { Component } from "react";
import UserLoggedIn from "./UserLoggedIn";

export default class App3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  //   handleLogin() {
  //     return this.setState({ isLoggedIn: false });
  //   }

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    if (isLoggedIn) {
      return <UserLoggedIn onLogOut={this.handleLogout} />;
    } else {
      return (
        <div style={{ textAlign: "center" }}>
          <h1>Pls Log in</h1>
          <button onClick={this.handleLogin}>Log in</button>
        </div>
      );
    }
  }
}
