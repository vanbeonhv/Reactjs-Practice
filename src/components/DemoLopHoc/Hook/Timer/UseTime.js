import { useState, useEffect } from "react";

export default function useTime() {
  const [time, setTime] = useState("10");
  useEffect(() => {
    setTime(time - 1);
  }, [time]);
}
