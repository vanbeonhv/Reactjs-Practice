import React from "react";
import { useState } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

const LoginPage = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [valid, setValid] = useState("d-none");
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

    console.log(data);
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.email === "admin@gmail.com" && data.password === "letmein") {
      navigate("/homepage");
    } else {
      setValid("d-block");
    }
  };
  return (
    <div
      className="vh-100"
      style={{
        backgroundColor: "#007bff",
        backgroundImage: "linear-gradient(to right, #0062E6, #33AEFF)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-4 fw-light fs-5">
                  Sign In
                </h5>
                <p
                  className={`'m-0 my-2 p-1' ${valid}`}
                  style={{ background: "#F8D7DA", color: "#9D1C59" }}
                >
                  Invalid email or password
                </p>
                <form>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      name="email"
                      onChange={handleInput}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      name="password"
                      onChange={handleInput}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>

                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="rememberPasswordCheck"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="rememberPasswordCheck"
                    >
                      Remember password
                    </label>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                      style={{
                        fontSize: "0.9rem",
                        letterSpacing: "0.05rem",
                        padding: "0.75rem 1rem",
                      }}
                      onClick={handleSubmit}
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" />
        <Route path="/homePage" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default LoginPage;
