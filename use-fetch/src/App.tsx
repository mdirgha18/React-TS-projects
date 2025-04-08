import React from "react";
import { useFetch } from "./useFetch";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function App() {
  const { data, loading, error } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  return (
    <div>
      <h1>useFetch Hook Example</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data &&
        data.map((post) => (
          <div key={post.id} style={{ marginBottom: "1rem" }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
}
