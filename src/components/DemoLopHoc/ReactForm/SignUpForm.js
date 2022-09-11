import { useState } from "react";

export default function SignUpForm() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFilled = !!(
      state.username &&
      state.email &&
      state.password &&
      state.password2
    );
    alert(
      isFilled ? "Sign up successfully!!!" : "Please full out all the fields"
    );
  };
  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <br />
          <input
            name="username"
            value={state.username}
            onChange={handleInput}
            type="text"
          ></input>
        </div>
        <div>
          <label>Email</label>
          <br />
          <input
            name="email"
            value={state.email}
            onChange={handleInput}
            type="email"
          ></input>
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            name="password"
            value={state.password}
            onChange={handleInput}
            type="password"
          ></input>
        </div>
        <div>
          <label>Confirm password</label>
          <br />
          <input
            name="password2"
            value={state.password2}
            onChange={handleInput}
            type="password"
          ></input>
        </div>
        <input type="submit" className="mt-2 btn shadow-none btn-info"></input>
      </form>
    </div>
  );
}
