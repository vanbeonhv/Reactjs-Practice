import React from "react";
import { useState } from "react";

const Test = () => {
  const gifts = ["Iphone 13", "Asus Gaming Laptop", "Play Station 4"];
  const [gift, setGift] = useState("Chưa có phần thưởng");
  const handleGift = () => {
    const i = Math.floor(Math.random() * gifts.length);
    console.log(i);
    return setGift(gifts[i]);
  };
  return (
    <div className="App" style={{}}>
      <div style={{}}>{gift}</div>
      <button onClick={handleGift} style={{ fontSize: "16px" }}>
        Roll
      </button>
    </div>
  );
};

export default Test;
