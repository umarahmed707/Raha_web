// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import Cardtext from '../Layouts/Cardtext';
// import img5 from '../assets/image/Icon1.png';
// import img6 from '../assets/image/Icon2.png';
// import img7 from '../assets/image/Icon3.png';
// import img8 from '../assets/image/Icon4.png';

// export default function Card3() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   return (
//     <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
//     <div className="carousel1 w-full py-8" data-aos="fade-up">
//       <div className="pb-10" data-aos="fade-down">
//         <h1 className="text-3xl sm:text-4xl lg:text-[55px] font-bold tracking-[-0.06em] leading-tight sm:leading-[1.2] lg:leading-[1.3]">
//           Transforming Finances:
//           <br />
//           <span className="text-2xl sm:text-4xl lg:text-[55px] bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent font-bold tracking-[-0.06em]">
//             RAHA Financials Client Experiences
//           </span>
//         </h1>
//         <p className="mt-3 text-sm sm:text-base">
//           Don't just take our word for it. See what our satisfied customers have to <br className="hidden sm:inline" /> say about our services.
//         </p>
//       </div>

//       {/* Carousel */}
//       <div className="carousel-wrapper overflow-x-auto scrollbar-hide py-4" data-aos="zoom-in">
//         <div className="carousel flex gap-4 w-max px-2">
//           <Cardtext
//             text="We've been working with Raha Financials for years and they've always provided us with top-notch service. Their expertise and attention to detail have been invaluable to our business."
//             img={img8}
//             title="Cody Fisher"
//             parah="Deloitte"
//           />
//           <Cardtext
//             text="I can't recommend Raha Financials enough! Their team is extremely knowledgeable and always available to answer any questions we have. They've made our lives so much easier."
//             img={img5}
//             title="Jenny Wilson"
//             parah="Behance"
//           />
//           <Cardtext
//             text="As a small business owner, I rely on Raha Financials to handle all my accounting needs. They're always up-to-date with the latest tax laws and regulations, which gives me peace of mind."
//             img={img7}
//             title="Ronald Richards"
//             parah="Razer"
//           />
//           <Cardtext
//             text="As a small business owner, I rely on Raha Financials to handle all my accounting needs. They're always up-to-date with the latest tax laws and regulations, which gives me peace of mind."
//             img={img6}
//             title="Eleanor Pena"
//             parah="Wise"
//           />
//         </div>
//       </div>
//     </div>

//     {/* Buttons */}
//     <div className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full pb-5" data-aos="fade-up">
//       <button className="rounded-lg py-2 px-6 text-sm text-white bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#587EDB] hover:to-[#1445C2] w-full sm:w-auto">
//         Request Consultation
//       </button>
//       <button className="border-2 border-[#1445C2] text-sm rounded-lg py-2 px-6 text-[#1445C2] w-full sm:w-auto">
//         Call Us
//       </button>
//     </div>
//   </div>


//   );
// }
import { useEffect, useRef } from "react";
import Cardtext from "../Layouts/Cardtext"; // Make sure this path is correct
import img5 from '../assets/image/Icon1.png';
import img6 from '../assets/image/Icon2.png';
import img7 from '../assets/image/Icon3.png';
import img8 from '../assets/image/Icon4.png';

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
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cardWidth = 320; // estimated width of one card including margin
    let scrollSpeed = 1;

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
  const duplicatedCards = [...cards, ...cards];

  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
      {/* Heading Section */}
      <div className="py-8">
        <h1 className="text-3xl sm:text-4xl lg:text-[55px] font-bold tracking-[-0.06em] leading-tight sm:leading-[1.2] lg:leading-[1.3]">
          Transforming Finances:
          <br />
          <span className="text-2xl sm:text-4xl lg:text-[55px] bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent font-bold tracking-[-0.06em]">
            RAHA Financials Client Experiences
          </span>
        </h1>
        <p className="mt-3 text-sm sm:text-base">
          Don't just take our word for it. See what our satisfied customers have to <br className="hidden sm:inline" /> say about our services.
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
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full pb-5 pt-6">
        <button className="rounded-lg py-2 px-6 text-sm text-white bg-gradient-to-b from-[#1445C2] to-[#587EDB] hover:from-[#587EDB] hover:to-[#1445C2] w-full sm:w-auto">
          Request Consultation
        </button>
        <button className="border-2 border-[#1445C2] text-sm rounded-lg py-2 px-6 text-[#1445C2] w-full sm:w-auto">
          Call Us
        </button>
      </div>
    </div>
  );
};

export default Card3;
