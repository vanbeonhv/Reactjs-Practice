import React, { Component } from "react";
import Home from "./Home";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        userName: "",
        password: "",
        isRemember: false,
      },
      isValid: false,
      isLoggedIn: false,
    };
  }

  handleChange = (e) => {
    this.setState(
      (state) => {
        const { form } = state;
        form[e.target.userName] = e.target.value;
        return { form };
      },
      () => this.checkValidForm()
    );
  };

  checkValidForm = () => {
    const { userName, password } = this.state.form;
    const value = userName && password;
    this.setState({ isValid: value });
  };

  handleSubmit = () => {
    if (this.state.isValid) {
      this.setState({ isLoggedIn: true });
    }
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input
              type="text"
              placeholder="username"
              value={this.state.form.userName}
              onChange={this.handleChange}
            />
            <input
              type="password"
              placeholder="password"
              value={this.state.form.password}
              onChange={this.handleChange}
            />
            <button onChange={this.handleSubmit}>login</button>
            <p className="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
