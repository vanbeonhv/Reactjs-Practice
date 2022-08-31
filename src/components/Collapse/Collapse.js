import React, { Component } from "react";

export default class Collapse extends Component {
  constructor(props) {
    super(props);
    this.state = { isExpand: false };
  }

  handler = () => {
    this.setState({ isExpand: true });
  };
  render() {
    return (
      <div>
        <div>
          <h2 style={{ background: "green" }}>Conditional Rendering</h2>
          {this.state.isExpand} ? (<button>Đóng giới thiệu</button>) : (
          <button>Xem giới thiệu</button>)
        </div>
      </div>
    );
  }
}
