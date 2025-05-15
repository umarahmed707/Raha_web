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
<div className="client2 px-4 mb-15 max-w-9xl lg:mx-20" data-aos="zoom-in">
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
            className="Clientinput1 flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none"
            placeholder="First Name*"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="Clientinput1 flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none"
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
            className="Clientinput1 flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none"
            placeholder="Phone Number"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="Clientinput1 flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none"
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
            className="Clientinput1 w-full p-3 rounded-lg border border-gray-300 focus:outline-none"
            placeholder="Subject"
          />
        </div>

        <div className="mt-5" data-aos="zoom-in">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="Clientinput1 w-full h-[150px] p-3 rounded-lg border border-gray-300 focus:outline-none resize-none"
            placeholder="Message"
          ></textarea>
        </div>

        <button
        data-aos="zoom-in"
          className="text-white font-bold py-3 px-6 mt-5 rounded-md bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-white hover:to-[#DADADA] hover:text-black hover:border border transition duration-300"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>

        </>
    )
}
