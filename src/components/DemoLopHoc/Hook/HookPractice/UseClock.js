import { useState } from "react";

export default function useClock() {
  const [time, setTime] = useState("");
  const updateTime = () => {
    let dateInfo = new Date();
    let hour = dateInfo.getHours();
    let minute = dateInfo.getMinutes();
    let second = dateInfo.getSeconds();
    setTime(`${hour}:${minute}:${second}`);
  };
  setInterval(() => {
    updateTime();
  }, 1000);
  return [time];
}
