import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="p-2">
      <input
        className="p-3 border-2 border-green-300 bg-blue-200 focus:outline-none my-4"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
