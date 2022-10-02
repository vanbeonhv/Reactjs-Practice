import React from "react";
import { Component } from "react";

class Hello extends Component {
  componentWillUnmount() {
    alert("The component will unmount");
  }
  render() {
    return <h1>Hello my fence!!!</h1>;
  }
}

export default Hello;
