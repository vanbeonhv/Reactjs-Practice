import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={props.onClick}
      style={props.style}
    >
      {props.label}
    </button>
  );
};

export default Button;
