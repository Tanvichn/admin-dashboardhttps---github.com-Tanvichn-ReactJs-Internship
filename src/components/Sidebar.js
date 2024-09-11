import React from 'react';

function Sidebar() {
  return (
    <div className='w-64 p-5 pt-10 pl-10'>
      <div className="w-max h-3/4 p-6 pt-3 shadow-md bg-gradient-to-r from-blue-50 to-purple-100 rounded-lg flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-bold">Filters</h2>
            <button className="text-blue-500 font-medium hover:underline">Clear All</button>
          </div>
          
          <div className="space-y-4 overflow-auto">
            <Dropdown label="Hospital name" />
            <Dropdown label="City" />
            <Dropdown label="Report Status" />
            <Dropdown label="AI Status" />
          </div>
        </div>
        
      </div>
    </div>
  );
}

function Dropdown({ label }) {
  return (
    <div className="relative">
      <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-lg shadow-sm leading-tight focus:outline-none focus:shadow-outline">
        <option>{label}</option>
        {/* Add your options here */}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M10 12l-5-5h10l-5 5z" />
        </svg>
      </div>
    </div>
  );
}

export default Sidebar;
