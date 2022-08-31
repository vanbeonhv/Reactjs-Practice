import React, { Component } from "react";
import Home from "./Home";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
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
        console.log(state);
        const { form } = state;
        form[e.target.name] = e.target.value;
        return { form };
      },
      () => this.checkValidForm()
    );
  };

  checkValidForm = () => {
    this.setState({ isRemember: "" });
  };

  render() {
    return (
      <div className="login-page">
        <div className="form">
          <form className="register-form">
            <input
              type="text"
              placeholder="name"
              value={this.state.form.name}
              onChange={this.handleChange}
            />
            <input
              type="password"
              placeholder="password"
              value={this.state.form.password}
              onChange={this.handleChange}
            />
            <input type="text" placeholder="email address" />
            <button>create</button>
            <p className="message">
              Already registered? <a href="#">Sign In</a>
            </p>
          </form>
          <form className="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>login</button>
            <p className="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
