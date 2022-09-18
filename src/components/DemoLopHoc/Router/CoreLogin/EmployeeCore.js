import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
const EmployeeCore = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <p>
        Employee Detail: {state.name} - {state.age} tuổi
      </p>
      <button className="btn btn-secondary mt-5" onClick={() => navigate(-1)}>
        Back to list
      </button>
    </div>
  );
};

export default EmployeeCore;
