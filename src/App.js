import React from 'react';
import NavBar from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App = () => {
  return (
    
    <div className="bg-gradient-to-r from-blue-200  to-pink-200 min-h-screen flex flex-col ">
       <div className="flex items-center">
      <img
        src="./media/logo.png"  
        alt="Scanalyst Logo"
        className="w-8 h-8 mr-3"
      />
      <h1 className="font-bold text-lg text-gray-800">Scanalyst</h1>
     </div>
      <NavBar /> 
      <div className="flex flex-1">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default App;
