import { useEffect, useState } from "react";

export default function ContentEffect() {
  const [data, setData] = useState([]);
  const [type, setType] = useState([]);

  const tabs = ["posts", "comments", "albums", "todos", "users"];
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [type]);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          className="btn btn-warning m-1"
          style={
            type === tab ? { color: "#fff", backgroundColor: "green" } : {}
          }
          onClick={() => setType(tab)}
          key={tab}
        >
          {tab}
        </button>
      ))}
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  );
}
