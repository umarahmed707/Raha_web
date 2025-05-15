import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';

const Consultationform = () => {
  AOS.init({ duration: 1000, once: false });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    navigate('/Thankyou');
  };

  return (
    <>
    <div className="text-center my-10 px-4" data-aos="fade-up" >
  <h1 className="text-4xl sm:text-[60px] lg:text-[95px] font-semibold tracking-tighter">
    Get
    <span className="bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent">
      {' '}Consultation
    </span>
  </h1>
</div>


    
<div className="client2 px-4 py-10 lg:ml-25 lg:py-20 max-w-7xl w-uto lg:w-[70rem] lg:mx-20" data-aos="fade-up" 
>
  <h1 className="font-bold text-3xl lg:text-5xl text-center mb-10">
    Schedule a Call Back
  </h1>
  <form onSubmit={handleSubmit} className="space-y-6">
    <div className="flex flex-col md:flex-row gap-5">
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className="Clientinput1 flex-1 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1445C2]"
        placeholder="First Name*"
        required
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className="Clientinput1 flex-1 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1445C2]"
        placeholder="Last Name*"
        required
      />
    </div>

    <div className="flex flex-col md:flex-row gap-5">
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="Clientinput1 flex-1 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1445C2]"
        placeholder="Phone Number"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="Clientinput1  flex-1 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1445C2]"
        placeholder="Email*"
        required
      />
    </div>

    <div>
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        className="Clientinput1 w-full p-4 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-[#1445C2]"
        placeholder="Subject"
      />
    </div>

    <div>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="Clientinput1 w-full h-40 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1445C2] resize-none"
        placeholder="Message"
      ></textarea>
    </div>

    <div className="text-center">
      <button
        className="text-white font-bold py-4 px-10 rounded-lg bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-white hover:to-[#DADADA] hover:text-black hover:border border transition duration-300"
        type="submit"
      >
        Submit
      </button>
    </div>
  </form>
</div>

      <div className=" flex items-center my-10 justify-center"
      
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full lg:mx-25 max-w-7xl">
          {/* Call Us */}
          <div className="bg-white p-6 rounded-2xl shadow w-auto" data-aos="fade-up">
            <h3 className="text-gray-700 text-[22px] font-semibold mb-2">Call us at</h3>
            <div className="flex items-center space-x-2 text-lg text-black font-semibold">
              <span>📞</span>
              <span>+1 (234) 4145-066</span>
            </div>
          </div>

          {/* Email Us */}
          <div className="bg-white p-6 rounded-2xl shadow " data-aos="fade-up">
            <h3 className="text-gray-700 text-[22px] font-semibold mb-2">Email us</h3>
            <div className="flex items-center space-x-2 text-lg text-black font-semibold">
              <span>📧</span>
              <span>info@rahafinancials.com</span>
            </div>
          </div>

          {/* Canfield Office */}
          <div className="bg-white p-6 rounded-2xl shadow" data-aos="fade-up">
            <h3 className="text-gray-700 text-[22px] font-semibold mb-2">
              Visit us <span className="font-bold text-black">Canfield Office</span>
            </h3>
            <div className="flex items-center space-x-2 text-lg text-black font-semibold">
              <span>📍</span>
              <span>5388 Bay Hill Canfield, OH 44406</span>
            </div>
          </div>

          {/* Dayton Office */}
          <div className="bg-white p-6 rounded-2xl shadow" data-aos="fade-up">
            <h3 className="text-gray-700 text-[22px] font-semibold mb-2">
              Visit us <span className="font-bold text-black">Dayton Office</span>
            </h3>
            <div className="flex items-center space-x-2 text-lg text-black font-semibold">
              <span>📍</span>
              <span>2775 Orchard Run Rd Dayton, OH 45449</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consultationform;
