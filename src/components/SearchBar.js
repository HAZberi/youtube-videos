import React, { useState } from "react";

const SearchBar = ({ onSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(searchTerm);
  };
  return (
    <div className="ui segment" style={{ marginTop: "1rem" }}>
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label style={{ textAlign: "center" }}>
            An Unbiased Youtube Search
          </label>
          <input
            style={{ textAlign: "center" }}
            type="text"
            placeholder="Start Typing . . . ."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
