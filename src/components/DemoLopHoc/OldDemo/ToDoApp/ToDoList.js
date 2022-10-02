import React from "react";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const ToDoList = () => {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    return storageJobs || [];
  });
  const handleInput = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];

      //Save to local storage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };
  return (
    <div style={{ padding: "32px" }}>
      <input
        style={{ outline: "none" }}
        value={job}
        onChange={(e) => {
          setJob(e.target.value);
        }}
      />
      <button onClick={handleInput}>Add</button>
      <ul className="list-unstyled">
        {jobs.map((job, index) => (
          //   console.log(job);
          <li key={index} className="w-50">
            <p className="m-1 border rounded-pill px-2 d-inline-block w-50 ">
              {job}
            </p>
            <button
              className=" border-0 bg-white lh-1 px-2"
              style={{ width: "auto" }}
            >
              <AiFillCloseCircle />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
