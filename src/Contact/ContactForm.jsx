import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';

export default function ContactForm() {
      useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
   const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form Data:', formData);

  // Redirect after submission
  navigate('/Thankyou'); // Change this route as needed
};

    return (
        <>
<div className="client2 px-4 mb-15 max-w-7xl lg:mx-30" data-aos="zoom-in">
      <h1 className="font-bold text-3xl lg:text-5xl mb-8 ">
        Fill this form to get in touch with us
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-5" data-aos="zoom-in">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className=" w-full sm:w-1/2 p-4 rounded-lg shadow-lg border border-[#DADADA] bg-white focus:outline-none focus:ring-1 focus:ring-[#1445C2]" 
            placeholder="First Name*"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className=" w-full sm:w-1/2 p-4 rounded-lg shadow-lg border border-[#DADADA] bg-white focus:outline-none focus:ring-1 focus:ring-[#1445C2]" 
            placeholder="Last Name"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row gap-5 mt-5" data-aos="zoom-in">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className=" w-full sm:w-1/2 p-4 rounded-lg shadow-lg border border-[#DADADA] bg-white focus:outline-none focus:ring-1 focus:ring-[#1445C2]" 
            placeholder="Phone Number"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className=" w-full sm:w-1/2 p-4 rounded-lg shadow-lg border border-[#DADADA] bg-white focus:outline-none focus:ring-1 focus:ring-[#1445C2]" 
            placeholder="Email*"
            required
          />
        </div>

        <div className="mt-5 " data-aos="zoom-in">
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className=" w-full sm:w-1/1 p-4 rounded-lg shadow-lg border border-[#DADADA] bg-white focus:outline-none focus:ring-1 focus:ring-[#1445C2]" 
            placeholder="Subject"
          />
        </div>

        <div className="mt-5" data-aos="zoom-in">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
           className=" w-full h-[200px] p-4 rounded-lg shadow-lg border border-[#DADADA] bg-white focus:outline-none focus:ring-1 focus:ring-[#1445C2]" 
            placeholder="Message"
          ></textarea>
        </div>

        <button
        data-aos="zoom-in"
          className="BlueBtn mt-5"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>

        </>
    )
}
