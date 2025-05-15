
import { useEffect, useRef } from "react";
import Cardtext from "../Layouts/Cardtext"; // Make sure this path is correct
import img5 from '../assets/image/Icon1.png';
import img6 from '../assets/image/Icon2.png';
import img7 from '../assets/image/Icon3.png';
import img8 from '../assets/image/Icon4.png';
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS library

const originalCards = [
  {
    text: "We've been working with Raha Financials for years and they've always provided us with top-notch service. Their expertise and attention to detail have been invaluable to our business.",
    img: img8,
    title: "Cody Fisher",
    parah: "Deloitte",
  },
  {
    text: "I can't recommend Raha Financials enough! Their team is extremely knowledgeable and always available to answer any questions we have. They've made our lives so much easier.",
    img: img5,
    title: "Jenny Wilson",
    parah: "Behance",
  },
  {
    text: "As a small business owner, I rely on Raha Financials to handle all my accounting needs. They're always up-to-date with the latest tax laws and regulations, which gives me peace of mind.",
    img: img7,
    title: "Ronald Richards",
    parah: "Razer",
  },
  {
    text: "As a small business owner, I rely on Raha Financials to handle all my accounting needs. They're always up-to-date with the latest tax laws and regulations, which gives me peace of mind.",
    img: img6,
    title: "Eleanor Pena",
    parah: "Wise",
  },
];

// Duplicate the cards to make infinite scroll feel
const cards = [...originalCards, ...originalCards];

const Card3 = () => {
     useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cardWidth = 450; // estimated width of one card including margin
    let scrollSpeed = 4;

    const startScroll = () => {
      const scroll = () => {
        if (!carousel) return;

        carousel.scrollLeft += scrollSpeed;

        // If scroll reaches half (because we've duplicated content), reset without visible jump
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        }

        requestAnimationFrame(scroll);
      };

      requestAnimationFrame(scroll);
    };

    startScroll();
  }, []);

  // Duplicate cards to give illusion of infinite scroll


  return (
    <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
  {/* Heading Section */}
<div 
  className="py-8 text-center" 
  data-aos="fade-up" 
  data-aos-duration="1000"
>
  <h1 
    className="text-3xl sm:text-4xl lg:text-[55px] font-bold tracking-[-0.06em] leading-tight sm:leading-[1.2] lg:leading-[1.3]" 
    data-aos="zoom-in" 
    data-aos-delay="200"
  >
    Transforming Finances:
    <br />
    <span 
      className="text-2xl sm:text-4xl lg:text-[55px] bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent font-bold tracking-[-0.06em]" 
      data-aos="fade-left" 
      data-aos-delay="400"
    >
      RAHA Financials Client Experiences
    </span>
  </h1>

  <p 
    className="mt-3 text-sm sm:text-base" 
    data-aos="fade-up" 
    data-aos-delay="600"
  >
    Don't just take our word for it. See what our satisfied customers have to 
    <br className="hidden sm:inline" /> 
    say about our services.
  </p>
</div>


      {/* Carousel Section */}
      <div className="overflow-hidden w-full" ref={carouselRef}>
        <div className="flex gap-4 w-max px-2">
          {cards.map((card, index) => (
            <div key={index} className="min-w-[300px] flex-shrink-0">
              <Cardtext
                text={card.text}
                img={card.img}
                title={card.title}
                parah={card.parah}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
    <div className="flex w-full flex-wrap justify-center mx-10 sm:justify-center gap-3 mt-5 sm:gap-4 pb-5" data-aos="zoom-in">
     <Link to="/Consultationform">
    <button className="rounded-lg py-2 px-2 sm:py-4 sm:px-6 text-xs sm:text-[18px] text-white bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#ffffff] hover:to-[#DADADA] hover:text-[#1445C2] hover:border w-auto sm:w-auto">
      Request Consultation
    </button>
    </Link>
    <button
    onClick={() => window.location.href = 'tel:+16282004141'}
    className="border text-[#1445C2] text-xs sm:text-[18px] rounded-lg py-1 sm:py-4 sm:px-4 bg-gradient-to-b from-[#ffffff] to-[#DADADA] hover:from-[#587EDB] hover:to-[#1445C2] hover:text-white w-[30%] sm:w-[10%]">
      Call Us
    </button>
  </div>
    </div>
  );
};

export default Card3;
