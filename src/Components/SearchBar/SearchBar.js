import React from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import ToggleButton from "../ToggleButton/ToggleButton";

const SearchBar = ({ clickHandler }) => {
  const [searchTerm, setSearchTerm] = useState("batman");

  return (
    <div className="search-wrapper">
      <form>
        <input
          type="text"
          className="search-bar search-bar-common"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            clickHandler(searchTerm.trim());
          }}
          className="search-btn search-bar-common"
        >
          <FaSearch />
        </button>
      </form>
      <ToggleButton />
    </div>
  );
};

export default SearchBar;
