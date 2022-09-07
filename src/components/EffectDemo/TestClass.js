import React, { Component } from "react";

export default class TestClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: "",
    };
  }
  componentDidMount() {
    const order = [100, 200, 300];
    const total = order.reduce((prev, next) => prev + next);
    this.setState({ counter: total });
    console.log("test");
  }
  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}
