import React, { Component } from "react";
import Hello from "./Hello";

class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
  }
  delete = () => this.setState({ display: false });
  render() {
    let comp;
    {
      this.state.display ? (comp = <Hello />) : (comp = "");
    }
    return (
      <div style={{ textAlign: "center" }}>
        {comp}
        <button
          type="button"
          onClick={this.delete}
          className="btn btn-primary w-25"
        >
          Unmount
        </button>
      </div>
    );
  }
}

export default App2;
