import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  const onSubmit = (e) => {
    history.push(`?s=${posts}`);
    e.preventDefault();
  };

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
      console.log(res);
    };
    getPosts();
  }, []);

  return (
    <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
      <label htmlFor="header-search">
        <span className="visually-hidden" placeholder="Search"></span>
      </label>
      <input
        value={posts}
        onInput={(e) => setPosts(e.target.value)}
        type="text"
        id="header-search"
        placeholder="Search"
        name="s"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
