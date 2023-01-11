import React from "react";

function SearchBar({ searchText, setSearchText }) {
  return (
    <div className="search">
      <input
        placeholder="Search Media..."
        type="text"
        value={searchText}
        onChange={(se) => {
          setSearchText(se.target.value);
        }}
      />
    </div>
  );
}
export default SearchBar;
