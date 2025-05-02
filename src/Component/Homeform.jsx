import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


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
      <div className="mx-4 sm:mx-20 my-35 flex flex-col lg:flex-row justify-center items-center ">
        
        {/* Left Section */}
        <div className="text-center lg:text-left" data-aos="fade-right">
          <h1 className="text-[40px] sm:text-[60px] lg:text-[55px] font-bold tracking-[-0.06em] leading-[1.1] sm:leading-[1.2] lg:leading-[1.3]">
            Book your free
          </h1>
          <h2 className="text-3xl sm:text-[50px] lg:text-[55px] font-bold tracking-[-0.06em] bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent">
            Consultation today
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl">
            Schedule your consultation with us, and rest assured that our Customer Support team will promptly return your call within 24 hours.
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="w-full max-w-2xl mx-auto p-6" data-aos="fade-left">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" name="fullname" placeholder="Full Name" value={formData.fullname} onChange={handleChange} required className="w-full sm:w-1/2 p-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1445C2] bg-gradient-to-b from-white to-[#DADADA]" />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full sm:w-1/2 p-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-b from-white to-[#DADADA]" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="w-full sm:w-1/2 p-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-b from-white to-[#DADADA]" />
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full sm:w-1/2 p-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-b from-white to-[#DADADA]" />
            </div>

            <div>
              <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} rows="4" required className="w-full p-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-b from-white to-[#DADADA]" />
            </div>

            <div>
              <button type="submit" className="  text-white shadow-lg bg-gradient-to-b from-[#1445C2] to-[#587EDB]  hover:border hover:bg-none border hover:text-[#1445C2] py-3  px-5 rounded-lg transition duration-300">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

    
    </div>
  );
}
