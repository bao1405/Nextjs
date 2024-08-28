import React from "react";

export default async function Page() {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();

  return (
    <div>
      <b>List of posts</b>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
