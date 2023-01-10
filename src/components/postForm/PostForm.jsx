import { useState } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const PostForm = ({ onCreatePost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const bodyChangeHadler = (event) => {
    setBody(event.target.value);
  };

  const newPostHandler = (e) => {
    e.preventDefault();
    const newPost = {
      id: Math.random(),
      title,
      body,
    };
    onCreatePost(newPost);
    setTitle("");
    setBody("");
  };

  return (
    <form>
      <MyInput
        onChange={titleChangeHandler}
        value={title}
        type="text"
        placeholder="Name of post"
      />
      <MyInput
        onChange={bodyChangeHadler}
        body={body}
        type="text"
        placeholder="Description of post"
      />
      <MyButton onClick={newPostHandler}>Add post</MyButton>
    </form>
  );
};

export default PostForm;
