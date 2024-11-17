import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleSearch = () => {
    onSearch(term);
  };

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} />
      <button className="SearchButton" onClick={handleSearch}>SEARCH</button>
    </div>
  );
};

export default SearchBar;
