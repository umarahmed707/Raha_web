import React, { useState } from 'react';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    website: '',
    logo: null,
  });
  const [selectedRating, setSelectedRating] = useState(null);

  const ratings = [
    { label: '😠', title: 'Very Bad' },
    { label: '🙁', title: 'Bad' },
    { label: '😐', title: 'Neutral' },
    { label: '🙂', title: 'Good' },
    { label: '😄', title: 'Excellent' },
  ];

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'logo') {
      setFormData({ ...formData, logo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <>
    <h2 className="text-7xl font-semibold text-center mb-2">Share Your</h2>
      <h3 className="text-7xl font-semibold text-center text-blue-700 mb-6">
        Feedback & Reviews
      </h3>

    <div className="max-w-md mx-auto mt-10 p-6 bg-gradient-to-b from-[#ffffff] to-[#DADADA] rounded-xl shadow-md">
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <p className="text-center font-bold mb-1 text-2xl">
            How was your experience with <span className="font-bold">Raha Financials?</span>
          </p>
          <p className="text-center text-gray-500 mb-4 text-sm">
            Your feedback is valuable to us and helps us improve our services.
          </p>

          <div className="flex justify-center space-x-4">
            {ratings.map((rate, idx) => (
              <button
                key={idx}
                type="button"
                title={rate.title}
                onClick={() => setSelectedRating(idx)}
                className='text-3xl p-2 rounded-full transition-colors bg-gradient-to-b from-[#ffffff] to-[#DADADA]'
                  
            
              >
                {rate.label}
              </button>
            ))}
          </div>
        </div>

        <textarea
          placeholder="Your feedback matters! Please provide any additional comments or suggestions that you have about our services."
          rows={3}
          className="w-full rounded-xl border border-gray-300 p-3 shadow-inner resize-none bg-gradient-to-b from-[#ffffff] to-[#DADADA] focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full rounded-xl border border-gray-300 p-3 shadow-inner bg-gradient-to-b from-[#ffffff] to-[#DADADA] focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="text"
          name="companyName"
          placeholder="Company name"
          value={formData.companyName}
          onChange={handleInputChange}
          className="w-full rounded-xl border border-gray-300 p-3 shadow-inner bg-gradient-to-b from-[#ffffff] to-[#DADADA] focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="text"
          name="website"
          placeholder="Company Website (optional)"
          value={formData.website}
          onChange={handleInputChange}
          className="w-full rounded-xl border border-gray-300 p-3 shadow-inner bg-gradient-to-b from-[#ffffff] to-[#DADADA] focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label
          htmlFor="logo-upload"
          className="flex flex-col items-center justify-center w-full h-28 px-4 transition bbg-gradient-to-b from-[#ffffff] to-[#DADADA] border-2 border-gray-300 border-dashed rounded-xl cursor-pointer hover:border-blue-400 focus:outline-none"
        >
          <svg
            className="w-8 h-8 mb-3 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16V4m0 0L3 8m4-4l4 4m6 8v-4m0 0l4 4m-4-4l-4 4"
            />
          </svg>
          <span className="text-sm text-gray-500">Upload Company Logo (or your profile)</span>
          <input
            id="logo-upload"
            name="logo"
            type="file"
            accept="image/*"
            onChange={handleInputChange}
            className="hidden"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-700 text-white font-semibold py-3 rounded-xl hover:bg-blue-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
}
