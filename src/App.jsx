import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import Service from "./Component/Home";
import Industrial from "./Industrials/Industrial";
import Insight from "./Insights/Insight";
import Pricing from "./Pricing/Pricing";
import ContactUs from "./Contact/ContactUs";
import Footer from "./common/Footer";
import Home from "./Component/Home";
import Card from "./Component/Card";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Industrial" element={<Industrial />} />
        <Route path="/Insight" element={<Insight />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        
       
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
