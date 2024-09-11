import React, { useState, useEffect } from 'react';
import hospitalData from '../data/hospitalData.json';
import SearchBar from './Searchbar'; // Import the SearchBar component


// MainContent Component
function MainContent() {
  
  const [hospitals, setHospitals] = useState([]);
  // const [radiologists, setRadiologists] = useState([]);

  useEffect(() => {
    // Assuming hospitalData contains both hospitals and radiologists
    setHospitals(hospitalData.hospitals || []);
    // setRadiologists(hospitalData.RADIOLOGISTS || []);
  }, []);

  return (

    <div className="w-full flex flex-col max-w-6xl">
    {/* Add padding to top from navbar */}
    <div className="mt-11 w-full  px-4 ">
      {/* Container for the search bar */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-100 p-4 rounded-lg shadow-lg ">
        <SearchBar placeholder="Search for hospitals..." /> {/* Search bar at the top */}
      </div>
    </div>

    <div className="card w-full sm:w-4/4 p-5  h-70 overflow-hidden ">
      {/* Render Hospital Cards */}
      <div className="flex  space-x-4 h-full overflow-y-auto">
        {hospitals.map(hospital => (
          <HospitalCard key={hospital.id} hospital={hospital} />
        ))}
      </div>

      {/* Render Radiologist Cards */}
      {/* <div className="flex flex-wrap justify-between mt-5">
        {radiologists.map(radiologist => (
          <RadiologistCard key={radiologist.id} radiologist={radiologist} />
        ))}
      </div> */}
    </div>
    </div>
  );
}

// HospitalCard Component
function HospitalCard({ hospital }) {
  return (
    <div className=" bg-gradient-to-r from-blue-50 to-purple-100 p-5 rounded-lg shadow-lg w-full md:w-[30%] mb-3 ">
      <div className="flex items-center mb-3">
        <img
          src="\logo.png" 
          alt={`${hospital.Name} logo`}
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <h3 className="font-bold text-xl mb-2">{hospital.Name}</h3>
          <p className="text-gray-600 mb-2">{hospital.Address}, {hospital.City}</p>
        </div>
      </div>
      <div className="mb-3">
        <p className="text-sm text-gray-600">P: {hospital.Contact_Number}</p>
        <p className="text-sm text-gray-600">E: {hospital.Email}</p>
      </div>
      <div className="border-b border-gray-300 my-3"></div>
      <div className="flex justify-between items-center mt-5">
        <span className="text-green-500 font-bold bg-green-100 py-1 px-2 rounded-lg">Active</span>
        <span className="text-green-500 font-bold bg-green-100 py-1 px-2 rounded-lg">Full Access</span>
        <button className="bg-gray-800 text-white py-1 px-4 rounded-lg hover:bg-gray-700">
          View Logs
        </button>
      </div>
    </div>
  );
}

// RadiologistCard Component
// function RadiologistCard({ radiologist }) {
//   return (
//     <div className="bg-white p-5 rounded-lg shadow-lg w-full md:w-[30%] mb-5">
//       <div className="flex items-center mb-2">
//         <img
//           src="\logo.png" 
//           alt={`${radiologist.Name} logo`}
//           className="w-12 h-12 rounded-full mr-3"
//         />
//         <div>
//           <h3 className="font-bold text-xl mb-2">{radiologist.Name}</h3>
//           <p className="text-gray-600 mb-2">{radiologist.Address}, {radiologist.City}</p>
//         </div>
//       </div>
//       <div className="mb-3">
//         <p className="text-sm text-gray-600">P: {radiologist.Contact_Number}</p>
//         <p className="text-sm text-gray-600">E: {radiologist.Email}</p>
//       </div>
//       <div className="border-b border-gray-300 my-3"></div>
//       <div className="flex justify-between items-center mt-3">
//         <span className="text-green-500 font-bold bg-green-100 py-1 px-2 rounded-lg">Active</span>
//         <span className="text-green-500 font-bold bg-green-100 py-1 px-2 rounded-lg">Full Access</span>
//         <button className="bg-gray-800 text-white py-1 px-4 rounded-lg hover:bg-gray-700">
//           View Logs
//         </button>
//       </div>
//     </div>
//   );
// }

export default MainContent;
