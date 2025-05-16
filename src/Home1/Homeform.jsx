import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css'; // Import the AOS CSS
import AOS from 'aos'; // Import AOS ls

export default function Homeform() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  };

  return (
    <div>
      <div className="mx-4 lg:mx-25 leading-[-25px] tracking-tight my-10 z-10 flex flex-col  lg:flex-row gap-10 justify-between items-center ">
        
        {/* Left Section */}
        <div className="text-center flex flex-col item-start lg:text-left" data-aos="fade-right">
          <h1 className="text-[40px] sm:text-[60px] lg:text-[70px] font-semibold tracking-[-0.06em] leading-[1.0] sm:leading-[1.2] lg:leading-[-1]">
            Contact us today for a <span className="text-3xl sm:text-[50px] lg:text-[60px] font-semibold tracking-[-0.06em] bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent">
            free consultation
          </span></h1>
          
          <p className="mt-4 text-sm sm:text-base mx-5 lg:mx-0 tracking-[1px]  md:tracking-[-0.5px]   md:text-lg lg:text-xl ">
            Let’s start our chat and connect to find out all the possibilities and plans we have for your success. Fill
            out the form and our Customer support team will reach out to you promptly.
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="w-full max-w-2xl o p-6" data-aos="fade-left">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" name="fullname" placeholder="Full Name" value={formData.fullname} onChange={handleChange} required className=" w-full sm:w-1/2 p-4 rounded-lg border border-[#DADADA] bg-white shadow-lg focus:outline-none focus:ring-1 focus:ring-[#1445C2]"/>
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className=" w-full sm:w-1/2 p-4 rounded-lg shadow-lg border border-[#DADADA] bg-white focus:outline-none focus:ring-1 focus:ring-[#1445C2]"/>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className=" w-full sm:w-1/2 p-4 rounded-lg shadow-lg border border-[#DADADA] bg-white focus:outline-none focus:ring-1 focus:ring-[#1445C2]" />
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className=" w-full sm:w-1/2 p-4 rounded-lg shadow-lg border border-[#DADADA] bg-white focus:outline-none focus:ring-1 focus:ring-[#1445C2]" />
            </div>

            <div>
              <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} rows="4" required className=" w-full p-4 rounded-lg shadow-lg border border-[#DADADA] bg-white focus:outline-none focus:ring-1 focus:ring-[#1445C2]" />
            </div>

            <div>
              <button type="submit" className="BlueBtn">
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>

    
    </div>
  );
}
