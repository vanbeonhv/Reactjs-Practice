import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HomeCore = () => {
  const { state } = useLocation();
  const employees = [
    {
      id: 1,
      name: "Hoa",
      age: 20,
    },
    {
      id: 2,
      name: "Khánh",
      age: 25,
    },
    {
      id: 3,
      name: "Tú",
      age: 22,
    },
  ];
  const navigate = useNavigate();
  const handleClick = (employee) => {
    navigate("/employee/" + employee.id, { state: employee });
  };
  return (
    <div className="ms-3">
      <h1>Welcome {state.username}</h1>
      <table className="table table-hover table-bordered table-sm caption-top table-responsive">
        <caption>List of employees</caption>
        <thead className="table-light border-primary">
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>
                <button
                  className="btn btn-primary text-white"
                  onClick={() => handleClick(employee)}
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-danger" onClick={() => navigate(-1)}>
        Log out
      </button>
    </div>
  );
};

export default HomeCore;
