import { useState } from "react";
import "./App.css";
import PostForm from "./components/postForm/PostForm";
import PostList from "./components/postList/PostList";

const DUMMY__DATA = [
  { id: 1, title: "Javascript", body: "Description" },
  { id: 2, title: "React", body: "Description 2" },
  { id: 3, title: "Next.js", body: "Description 3" },
];

function App() {
  const [posts, setPosts] = useState(DUMMY__DATA);

  const cretePost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <PostForm onCreatePost={cretePost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
