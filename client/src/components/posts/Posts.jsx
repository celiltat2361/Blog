import Post from "../post/Post";
import "./posts.css";
import Dropdown from "../../components/dropdown/Dropdown";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        
        <Post post={p} />
      ))}
    </div>
  );
}