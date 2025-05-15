import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const ConsultantModel = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [natureOfBusiness, setNatureOfBusiness] = useState("");
const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: Add validation here if needed
    alert("Form Submitted Successfully!");
navigate('/Thankyou');
    // Clear the form
    setFullName("");
    setPhoneNumber("");
    setEmail("");
    setNatureOfBusiness("");

    // Close the modal
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-sm z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center border border-blue-300 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold focus:outline-none"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-6 text-black">Speak A Consultant</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-gradient-to-b from-white to-blue-50 text-gray-700 shadow-inner focus:outline-none"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 rounded-lg bg-gradient-to-b from-white to-blue-50 text-gray-700 shadow-inner focus:outline-none"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-gradient-to-b from-white to-blue-50 text-gray-700 shadow-inner focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Nature of Business"
            rows="4"
            className="w-full p-3 rounded-lg bg-gradient-to-b from-white to-blue-50 text-gray-700 shadow-inner focus:outline-none"
            value={natureOfBusiness}
            onChange={(e) => setNatureOfBusiness(e.target.value)}
            required
          ></textarea>

       
            <button
            type="submit" 
            className=" text-white font-bold py-3 px-6 rounded-lg bg-gradient-to-b from-[#1445C2] to-[#9cb3ec] transition duration-300 w-full"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultantModel;
