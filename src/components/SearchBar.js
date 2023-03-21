import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      className="bg-gray-800 border-2 border-gray-600 focus:border-red-500 focus:outline-none rounded-lg p-2 w-full text-white"
      type="text"
      placeholder="Search for a superhero..."
      value={searchTerm}
      defaultValue={null}
      onChange={e => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
