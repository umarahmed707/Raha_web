import React, { useEffect } from 'react'
import { FaPhone } from 'react-icons/fa';
import ContactForm from './ContactForm';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos';

export default function ContactUs() {
    useEffect(() => {
      AOS.init(); // Initialize AOS
    }, []);
  return (
    <>
  <div className='text-center mt-15' data-aos="fade-up">
    <h1 className='text-5xl sm:text-[60px] lg:text-[95px] tracking-tighter font-bold'>
      <span className='bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent tracking-[-0.06em]'>
        Contact
      </span>{" "}
      Us
    </h1>
  </div>

  <div className='flex flex-col lg:flex-row justify-center items-center gap-5 mt-5 lg:my-15 px-4 lg:px-20'>
    
    {/* Left Info Section */}
    <div className='w-full lg:w-1/2 space-y-6 px-4'>
  {/* Phone */}
  <div className='Con' data-aos="fade-up">
    <p className='text-sm sm:text-[16px] p-3 '>
      Call us at
      <span className='flex items-center gap-3 mt-2  font-bold text-sm sm:text-[20px]'>
        <FaPhone className='text-[#1445C2]' size={20} />
        (316) 555-0116
      </span>
    </p>
  </div>

  {/* Email */}
  <div className='Con' data-aos="fade-up">
    <p className='text-sm sm:text-[16px] p-3'>
      Email us at
      <span className='flex items-center gap-3 mt-2 font-bold text-sm sm:text-[20px]'>
        <FaPhone className='text-[#1445C2]' size={20} />
        info@rahafinancials.com
      </span>
    </p>
  </div>

  {/* Office 1 */}
  <div className='Con' data-aos="fade-up">
    <p className='text-sm sm:text-[16px] p-3'>
      Visit us at <b>Office 1</b>
      <span className='flex items-start gap-3 mt-2 font-bold text-sm sm:text-[20px]'>
        <FaPhone className='text-[#1445C2] mt-1' size={20} />
        6391 Elgin St. Celina, Delaware 10299
      </span>
    </p>
  </div>

  {/* Office 2 */}
  <div className='Con' data-aos="fade-up">
    <p className='text-sm sm:text-[16px] p-3'>
      Visit us at <b>Office 2</b>
      <span className='flex items-start gap-3 mt-2 font-bold text-sm sm:text-[20px]'>
        <FaPhone className='text-[#1445C2] mt-1' size={20} />
        6391 Elgin St. Celina, Delaware 10299
      </span>
    </p>
  </div>

  {/* Button */}
  <div>
    <button data-aos="fade-up"  onClick={() => window.location.href = 'tel:+16282004141'} className="BlueBtn w-full text-center">
      Get Call Back
    </button>
  </div>
</div>


    {/* Right Map Section */}
    <div className="w-full sm:w-[550px] h-[150px] sm:h-[500px] md:h-[650px] rounded-lg overflow-hidden shadow-lg mt-10 mb-10" data-aos="fade-up">
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.498285226988!2d-80.7292898!3d41.0411941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8833fc9bb11928e9%3A0x5f9aed458ecf8a39!2s5388%20Bay%20Hill%20Dr%2C%20Canfield%2C%20OH%2044406%2C%20USA!5e0!3m2!1sen!2sin!4v1714975662745!5m2!1sen!2sin"
    width="100%"
    height="100%"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="border-0 w-full h-full"
  ></iframe>
</div>


  </div>

  <ContactForm />
</>

  )
}
