import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EmailInfo } from "./LoginPage";
const HomePage = () => {
  let navigate = useNavigate();
  const emailInfo = useContext(EmailInfo);
  console.log(emailInfo);
  return (
    <div
      className="text-center vh-100 text-white"
      style={{ backgroundColor: "rgb(61, 133, 210)" }}
    >
      <h1 className="pt-5">Welcome!</h1>
      <div className="d-inline-block text-start mt-3">
        <p>Email: admin@gmail.com</p>
        <p>Email: {emailInfo}</p>
        <p>Password: letmein</p>
      </div>
      <br />
      <button onClick={() => navigate(-1)} className="btn btn-warning">
        Back
      </button>
    </div>
  );
};

export default HomePage;
