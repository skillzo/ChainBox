import React from "react";
import "./searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
function SearchBar() {
  return (
    <div className="search-container">
      <SearchIcon />
      <input type="search" placeholder="Search Coins & Exchanges..." />
    </div>
  );
}

export default SearchBar;
