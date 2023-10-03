"use client"
import Button from "../Button/index.jsx";
import Input from "../Input/index.jsx";
import { StyledSearch } from "./style.js";

const Search = () => {
  return (
    <StyledSearch>
      <Input type="search" placeholder="Search" imageHidden />
      <select name="category">
        <option value="1">All category</option>
        <option value="2">Electronics</option>
        <option value="3">Furniture</option>
        <option value="4">Clothes</option>
      </select>
      <Button text="Search" color="secondary" variant="primary" imageHidden />
    </StyledSearch>
  );
};

export default Search;
