import { useState, useEffect } from "react";
import Content from "./Content";

const UseEffectF8 = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div className="p-5">
      <button className="btn btn-info shadow-none" onClick={handleClick}>
        Toggle
      </button>
      {show && <Content />}
    </div>
  );
};

export default UseEffectF8;
