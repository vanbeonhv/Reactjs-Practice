import React, { useState } from "react";

const UseStateDemo = () => {
  const [username, setUsername] = useState("");
  const [nameInput, setNameInput] = useState("");
  const handleChange = (e) => {
    setNameInput(e.target.value);
  };
  const handleClick = () => setUsername(nameInput);
  console.log(nameInput);
  return (
    <div className="container">
      <p>Hi {username}</p>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Say Hi!</button>
    </div>
  );
};

export default UseStateDemo;
