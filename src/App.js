import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import FAQComponent from './components/FAQs/FAQs.jsx';
import UtilityToken from './pages/UtilityToken.jsx';
import RevenueShare from './pages/RevenueShare.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/faqs" element = {<FAQComponent />} />
        <Route path='/token' element = {<UtilityToken />} />
        <Route path='/revenue-share' element = {<RevenueShare />} />
      </Routes> 
      <Footer />
    </Router>
  );
}

export default App;
