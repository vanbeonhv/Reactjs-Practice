import { useEffect, useState } from "react";
import ContentEffect from "./ContentEffect";

export default function Effect() {
  const [display, setDisplay] = useState(false);
  return (
    <div className="p-3 vh-100 overflow-hidden">
      <button
        className="btn btn-info shadow-none "
        onClick={() => setDisplay(!display)}
      >
        Toggle
      </button>
      {display && <ContentEffect />}
    </div>
  );
}
