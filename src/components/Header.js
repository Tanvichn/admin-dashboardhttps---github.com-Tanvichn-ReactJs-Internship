import React from 'react';


const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-200  to-pink-200 shadow-md p-4 flex justify-between items-center ">
   
    {/* hospital tags */}
    <div className="w-full flex flex-col bg-gradient-to-r from-blue-50 to-purple-100  rounded-lg">
   
    <div className="mt-6 max-w-6xl px-7">
    <div className="flex space-x-4">
      <button className="bg-purple-200 text-purple-700 py-1 px-4 rounded-full">
        Hospitals (5)
      </button>
      <button className="bg-purple-200 text-purple-700 py-1 px-4 rounded-full">
        Radiologists (15)
      </button>
      <button className="bg-purple-200 text-purple-700 py-1 px-4 rounded-full">
        Technicians (5)
      </button>
      <button className="bg-purple-200 text-purple-700 py-1 px-4 rounded-full">
        Reports (0)
      </button>
      
     
    </div>
 
   
    </div>
    
    </div> 
    <div className="flex ">
      <button className="flex w-44  px-2  py-3 bg-green-500 text-white rounded-lg">
        + Add / Update User
      </button>
    </div>
    
  </nav>
    
  );
};

export default NavBar;
