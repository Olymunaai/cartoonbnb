import React from "react";
import "./search.css";

const Search = ({ search, onChange, onSubmit }) => {
  return (
    <form className="search-form">
      <input
        type="text"
        className="search"
        placeholder="Enter desired location..."
        value={search}
        onChange={onChange}
      />
      <button className="submit" type="submit" onSubmit={onSubmit}>
        Search
      </button>
    </form>
  );
};

export default Search;
