import { useContext } from "react";
import { Context } from "../../context/Context";
import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  const { search } = useContext(Context);

  const postContainsKeyWord = (post, keyWord) => {
    for (let key in post) {
      if (
        post[key].toString().toLowerCase().indexOf(keyWord.toLowerCase()) !== -1
      ) {
        return true;
      }
    }
    return false;
  };

  const filteredPosts = () =>
    posts
      .filter((post) => postContainsKeyWord(post, search))
      .map((filteredPost, index) => (
        <Post key={filteredPost.title + index} post={filteredPost} />
      ));

  return <div className="posts">{filteredPosts()}</div>;
}
