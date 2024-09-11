import React from 'react';

function SearchBar({ placeholder }) {
    return (
      <div className="w-full flex items-center p-4 ">
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zm-1.415-5.607a6 6 0 100 12 6 6 0 000-12z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder={placeholder}
            className="pl-10 pr-4 py-2 w-full bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:border-indigo-300"
          />
        </div>
      </div>
    );
  }

  export default SearchBar; 