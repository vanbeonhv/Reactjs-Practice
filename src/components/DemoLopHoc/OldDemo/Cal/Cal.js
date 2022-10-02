import React, { Component } from "react";
class Cal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: 0,
      secondNumber: 0,
      result: "",
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: parseInt(e.target.value) });
  };
  calculate = (operator) => {
    const { firstNumber, secondNumber } = this.state;
    switch (operator) {
      case "+":
        this.setState({
          result: parseFloat(firstNumber) + parseFloat(secondNumber),
        });
        break;
      case "-":
        this.setState({
          result: parseFloat(firstNumber) - parseFloat(secondNumber),
        });
        break;
      case "*":
        this.setState({
          result: parseFloat(firstNumber) * parseFloat(secondNumber),
        });
        break;
      case "/":
        this.setState({
          result: //prettier-ignore
          (parseFloat(firstNumber) / parseFloat(secondNumber))
          .toFixed(2),
        });
        break;
      default:
        this.setState("Invalid input");
    }
  };
  render() {
    return (
      <div
        className="m-auto border mt-5 text-center"
        style={{ width: "200px" }}
      >
        <h3>Calculator</h3>
        <input
          className="m-auto"
          type="number"
          name="firstNumber"
          onChange={this.handleInput}
        ></input>
        <br />
        <input
          className=" m-auto"
          type="number"
          name="secondNumber"
          onChange={this.handleInput}
        ></input>
        <p className="ms-1" style={{ textAlign: "left" }}>
          Result: {this.state.result}
        </p>
        <button
          className="btn btn-outline-primary"
          onClick={(e) => {
            this.calculate("+");
          }}
        >
          +
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={(e) => {
            this.calculate("-");
          }}
        >
          -
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={(e) => {
            this.calculate("*");
          }}
        >
          *
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={(e) => {
            this.calculate("/");
          }}
        >
          /
        </button>
      </div>
    );
  }
}

export default Cal;
