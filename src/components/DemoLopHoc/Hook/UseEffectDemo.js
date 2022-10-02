import React, { useEffect, useState } from "react";

const UseEffectDemo = () => {
  const [fullName, setFullName] = useState({ name: "Van", age: "18" });
  const [title, setTitle] = useState("useEffect Demo");
  useEffect(() => {
    console.log("useEffect has been called");
    setFullName({ name: "Mai", age: "16" });
  }, [fullName.name]);
  return (
    <div>
      <h1>Title: {title}</h1>
      <h3>Name: {fullName.name}</h3>
      <h3>Age: {fullName.age}</h3>
    </div>
  );
};

export default UseEffectDemo;
