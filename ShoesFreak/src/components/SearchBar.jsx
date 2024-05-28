// SearchBar.js

import React, { useState } from "react";

const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" border-2 w-2/3 ">
      <input
        type="text"
        placeholder="Search shoes"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="relative outline-none h-10 w-full pl-2 "
      />
      <ul className=" absolute top-12 bg-white w-full shadow-lg">
        {searchTerm !== "" &&
          filteredData.map((item) => (
            <li
              className=" h-8 pl-2 hover:bg-gray-100 cursor-pointer"
              key={item.id}
            >
              {item.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchBar;
