import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS library

const InsightFilterCard = ({ blogs }) => {
      useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  const [filters, setFilters] = useState({
    topic: "",
    industry: "",
    type: "",
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredBlogs = blogs.filter((blog) => {
    return (
      (!filters.topic || blog.topic === filters.topic) &&
      (!filters.industry || blog.industry === filters.industry) &&
      (!filters.type || blog.type === filters.type)
    );
  });

  return (
  <div className="text-black text-center" data-aos="fade-up" data-aos-duration="1000">
  <h1 
    className="font-bold text-[40px] md:text-[60px] mt-20" 
    data-aos="zoom-in" 
    data-aos-delay="200"
  >
    <span className="bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent">
      Insightful
    </span>{" "} 
    Perspectives
  </h1>

  <p className="mt-4 text-base md:text-lg" data-aos="fade-up" data-aos-delay="400">
    Explore our latest articles on accounting best practices, industry trends,
    <br className="hidden md:block" />
    and regulatory updates.
  </p>

  {/* Filters */}
  <div 
    className="flex flex-col lg:flex-row gap-4 w-[150px] mb-8 m-10 justify-start" 
    data-aos="fade-up" 
    data-aos-delay="600"
  >
    <label className="font-semibold">Filters:</label>
    <select
      name="topic"
      onChange={handleFilterChange}
      className="p-2 border rounded text-black"
    >
      <option value="">Topic</option>
      <option value="cybersecurity">Cybersecurity</option>
      <option value="audit">Audit</option>
      <option value="tax">Tax</option>
      <option value="sustainability">Sustainability</option>
      <option value="analytics">Analytics</option>
    </select>

    <select
      name="industry"
      onChange={handleFilterChange}
      className="p-2 border rounded text-black"
    >
      <option value="">Industry</option>
      <option value="finance">Finance</option>
      <option value="banking">Banking</option>
      <option value="regulatory">Regulatory</option>
    </select>

    <select
      name="type"
      onChange={handleFilterChange}
      className="p-2 border rounded text-black"
    >
      <option value="">Type</option>
      <option value="guide">Guide</option>
      <option value="summary">Summary</option>
      <option value="report">Report</option>
    </select>
  </div>

  {/* Blog Cards */}
  <div 
    className="flex flex-wrap gap-6 justify-center px-4" 
    data-aos="fade-up" 
    data-aos-delay="800"
  >
    {filteredBlogs.map((blog, index) => (
      <div
        key={blog.id}
        className="w-full md:w-[30%] overflow-hidden shadow-lg rounded-lg bg-white hover:scale-105 transition-transform duration-300"
        data-aos="zoom-in"
        data-aos-delay={`${index * 200}`}
      >
        <Link to="/BlogArticle">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-70 object-cover"
          />
        </Link>
        <div className="p-4 text-left">
          <span className="text-sm text-gray-500 block mb-2">{blog.date}</span>
          <p className="font-semibold text-lg mb-2">{blog.title}</p>
          <p className="text-sm mb-4">{blog.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default InsightFilterCard;
