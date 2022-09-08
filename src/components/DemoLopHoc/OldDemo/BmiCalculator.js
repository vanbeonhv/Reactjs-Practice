import { Component } from "react";
import Input from "./Input";
import Button from "./Button";

class BmiCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      weight: "",
      bmi: 0,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  check = (e) => {
    e.preventDefault();
    var bmiResult = this.state.weight / Math.pow(this.state.height, 2);
    this.setState({ bmi: bmiResult });
  };
  render() {
    return (
      <div className="container ">
        <div className="row background-image: var(--bs-gradient-test))">
          <div className="col-3"></div>
          <div className="col-6 mt-5 border border-info shadow-sm rounded">
            <form>
              <h2>BMI Calculator</h2>
              <Input
                label="Nhập chiều cao của bạn:"
                placeholder="Chiều cao tính bằng mét"
                name="height"
                className="form-control"
                onChange={this.handleChange}
              ></Input>
              <Input
                label="Nhập cân nặng của bạn:"
                placeholder="Cân nặng tính bằng kg"
                name="weight"
                className="form-control mb-3"
                onChange={this.handleChange}
              ></Input>
              <p>Chỉ số BMI của bạn là: {this.state.bmi}</p>
              <Button
                className="btn btn-primary mx-auto my-3 d-block"
                name="Tính BMI"
                onClick={this.check}
                value={this.value}
              ></Button>
            </form>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    );
  }
}
export default BmiCalculator;
