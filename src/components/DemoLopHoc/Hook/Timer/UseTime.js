import { useState, useEffect } from "react";

export default function useTime() {
  const [time, setTime] = useState("10");
  const UpdateTime = () => {
    //   useEffect(() => {
    //     setTime(time - 1);
    //     return (cleanup) => {
    //       setTime();
    //     };
    // }, [time]);
  };

  setInterval(() => {
    UpdateTime();
  }, 1000);
  return [time];
}
