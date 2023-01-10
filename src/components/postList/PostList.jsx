import PostItem from "../postItem/PostItem";

const PostList = ({ posts }) => {
  return (
    <div>
      <h1>List of posts</h1>
      {posts.map((post, index) => (
        <PostItem post={post} key={post.id} number={index + 1} />
      ))}
    </div>
  );
};

export default PostList;
