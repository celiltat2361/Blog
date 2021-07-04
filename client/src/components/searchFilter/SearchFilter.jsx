import { useContext, useState } from "react";
import { Context } from "../../context/Context";

import "./searchFilter.css";
export default function SearchFilter() {
  const { dispatch } = useContext(Context);
  const [search, setSearch] = useState();
  const handleChange = (e) => {
    setSearch(e.target.value);
    dispatch({ type: "SEARCH", payload: e.target.value });
  };
  const cancelSearch = (e) => {
    setSearch("");
    dispatch({ type: "SEARCH", payload: "" });
  };

  return (
    <div className="filterWrapper menu-trigger">
       {search ? <i onClick={() => cancelSearch()} className="fas filterIcon fa-times" /> : <i className="fas filterIcon fa-search" />}
      <input
        onChange={handleChange}
        className="filterInput"
        type="text"
        placeholder="Search..."
        value={search}
      />
     
    </div>
  );
}
