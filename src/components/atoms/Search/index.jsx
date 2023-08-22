import React from "react";
import "./style.css";

const Search = () => {
  return (
    <div className="search">
      <input type="search" placeholder="Search" />
      <select name="category">
        <option value="1">All category</option>
        <option value="2">category1</option>
        <option value="3">category2</option>
        <option value="4">category3</option>
        <option value="5">category4</option>
      </select>
      <button>Search</button>
    </div>
  );
};

export default Search;
