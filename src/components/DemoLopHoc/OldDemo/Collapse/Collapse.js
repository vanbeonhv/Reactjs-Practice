import React, { Component } from "react";

export default class Collapse extends Component {
  constructor(props) {
    super(props);
    this.state = { isExpand: false };
  }

  handler = () => {
    this.setState({ isExpand: true });
  };

  handlerOpen = () => {
    this.setState({ isExpand: false });
  };

  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ background: "#008000a8" }}>Conditional Rendering</h2>
          {this.state.isExpand ? (
            <>
              <button onClick={this.handlerOpen}>Đóng giới thiệu</button>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                mattis sodales sodales. Cras porttitor metus quis odio posuere
                euismod. In eu neque in lorem cursus ullamcorper. Proin suscipit
                accumsan nisi, in porttitor dui facilisis vitae. In eu turpis a
                dolor pretium accumsan. Nunc sit amet enim non dolor venenatis
                condimentum sit amet eu orci. Vivamus eget dictum lorem, non
                auctor lectus. Integer convallis fermentum magna, eu tincidunt
                purus semper eu. Nunc eget lorem vel nibh luctus sodales sit
                amet eu enim. Quisque ultrices sapien vel vestibulum dignissim.
                Pellentesque libero dolor, auctor in erat vel, placerat varius
                magna.
              </p>
            </>
          ) : (
            <button onClick={this.handler}>Xem giới thiệu</button>
          )}
        </div>
      </div>
    );
  }
}
