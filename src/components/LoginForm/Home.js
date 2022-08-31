import React, { Component } from "react";

export default class Home extends Component {
  componentWillUnmount() {
    alert("Good bye!!!");
  }
  render() {
    return (
      <div className="container">
        <button type="button" onClick={this.props.onLogOut}>
          Log out
        </button>
      </div>
    );
  }
}
