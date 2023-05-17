import React, { useState } from 'react';

function SearchBar() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearch = () => {
    if (searchKeyword) {
      setSearchHistory((prevSearchHistory) => [...prevSearchHistory, searchKeyword]);
      setSearchKeyword('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <div className="searchDiv">

      <input
        type="text"
        value={searchKeyword}
        onChange={(event) => setSearchKeyword(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <div>
        <button onClick={handleSearch} className="searchBtn">Search</button>
      </div>
        </div>
      <div>
        {searchHistory.map((keyword, index) => (
          <p key={index}>{keyword}</p>
        ))}
      </div>
    </div>
  );
}


export default SearchBar;
