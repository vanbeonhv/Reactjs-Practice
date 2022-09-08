import { useState, useEffect } from "react";

function Content() {
  const [posts, setTitle] = useState([]);
  const tabs = ["posts", "comments", "albums"];
  const [type, setType] = useState("posts");

  console.log(type);

  useEffect(() => {
    // console.log("title change");
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => setTitle(posts));
  }, [type]);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          className="btn btn-warning m-1"
          onClick={() => setType(tab)}
          key={tab}
          style={type === tab ? { color: "#fff", backgroundColor: "#999" } : {}}
        >
          {tab}
        </button>
      ))}
      {posts.map((post, index) => (
        <li key={post.id}>{post.title || post.name}</li>
      ))}
    </div>
  );
}
export default Content;
