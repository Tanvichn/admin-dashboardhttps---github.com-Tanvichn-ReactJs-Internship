import React from 'react';
import NavBar from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 




const App = () => {
  return (
    
    <div className="bg-gradient-to-r from-blue-200  to-pink-200 min-h-screen flex flex-col ">
       
    <Router>
      <NavBar />
      <Routes>
        <Route path="/hospital" element={<MainContent page={'HOSPITAL'}/>} />
        <Route path="/Radiologists" element={<MainContent page={'RADIOLOGISTS'} />} />
        <Route path="/technicial" element={<MainContent page={'TECHNICIAN'} />} />
        <Route path="/report" element={<MainContent  page={'REPORTS'}/>} />
      </Routes>
    </Router>
      <div className="flex flex-1">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default App;
