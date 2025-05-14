




import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./common/Navbar";
import Industrial from "./Industrials/Industrial";
import Insight from "./Insights/Insight";
import Pricing from "./Pricing/Pricing";
import ContactUs from "./Contact/ContactUs";
import Footer from "./common/Footer";
import Home from "./Home1/Home";
import Index from "./Interprise/Index";
import BlogArticle from "./Insights/BlogArticle";
import Payroll from "./Payrollfile/Payroll";
import Service from "./Home1/Card";
import Book from "./Bookkeeping/Book";
import Software from "./softwaresection/Software";
import Llc from "./llcRegistration/Llc";
import Tax from "./tax/Tax";
import Financial from "./financial/Financial";
import Business from "./Bussiness/Bussiness";
import Itins from "./itin/Itins";
import Hospita from "./Hospitality/Hospita";
import Retail from "./Hospitality/Retail";
import Real from "./Hospitality/Real";
import Technology from "./Hospitality/Technology";
import Healthcare from "./Hospitality/Healthcare";
import Energy from "./Hospitality/Energy";
import Agriculture from "./Hospitality/Agriculture";
import Construction from "./Hospitality/Construction";
import Model from "./Modelfile/Model";
import Model2 from "./Modelfile/Model2";
import Model3 from "./Modelfile/Model3";
import Audit from "./enterAudit/Audit";
import EnterBussiness from "./enterBussiness/EnterBussiness";
import Hr from "./enterHrManagement/Hr";
import EnterPayroll from "./enterPayroll/EnterPayroll";
import Company from "./enterCompany/Company";
import Budget from "./enterBudget/Budget";
import Risk from "./enterRisk/Risk";
import Consultationform from "./Contact/Consultationfrom";

import ConsultantModal from "./Modelfile/ConsultantModel";
import AboutUs from "./About/AboutUs";





function App() {
   const location = useLocation();

  return (
<>
  {location.pathname !== "/Index" && <Navbar />}
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Index" element={<Index />} />
          <Route path="/Audit" element={<Audit />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/EnterBussiness" element={<EnterBussiness />} />
          <Route path="/Hr" element={<Hr />} />
          <Route path="/EnterPayroll" element={<EnterPayroll />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Budget" element={<Budget />} />
          <Route path="/Risk" element={<Risk />} />
          <Route path="/Book" element={<Book />} />
          <Route path="/Payroll" element={<Payroll />} />
          <Route path="/Software" element={<Software />} />
          <Route path="/Llc" element={<Llc />} />
          <Route path="/Itin" element={<Itins />} />
          <Route path="/Tax" element={<Tax />} />
          <Route path="/Financial" element={<Financial />} />
          <Route path="/Bussiness" element={<Business />} />
          <Route path="Service" element={<Service />} />
          <Route path="/Industrial" element={<Industrial />} />
          <Route path="/Hospita" element={<Hospita />} />
          <Route path="/Retail" element={<Retail />} />
          <Route path="/Real" element={<Real />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/Healthcare" element={<Healthcare />} />
          <Route path="/Energy" element={<Energy />} />
          <Route path="/Agriculture" element={<Agriculture />} />
          <Route path="/Construction" element={<Construction />} />
          <Route path="/Insight" element={<Insight />} />
          <Route path="/BlogArticle" element={<BlogArticle />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Model" element={<Model/>} />
          <Route path="/Model2" element={<Model2 />} />
           <Route path="/Model3" element={<Model3/>} />
      
           <Route path="/ConsultantModel" element={<ConsultantModal/>} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Consultationform" element={<Consultationform/>} />
          
        </Routes>
        <Footer />

   
        </>
  );
}

export default App;
