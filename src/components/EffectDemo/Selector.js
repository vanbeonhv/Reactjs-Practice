import React from "react";
import { useState, useEffect } from "react";

export default function Selector() {
  const listCourse = ["html", "css", "reactjs", "javascript"];
  const [courseName, setCourseName] = useState("");
  const [courseSelected, setCourseSelected] = useState("");

  const handleChoice = (e) => {
    setCourseName(e.target.value);
  };

  useEffect(() => {
    setCourseSelected(listCourse[courseName]);
  });
  return (
    <div>
      <label>Courses: </label>
      <select
        onChange={(e) => {
          handleChoice(e);
        }}
      >
        {listCourse.map((course, index) => (
          <option value={index} key={index}>
            {course}
          </option>
        ))}
      </select>
      <h2>You selected {courseSelected}</h2>
    </div>
  );
}
