
import { useEffect, useRef } from "react";
import Cardtext from "../Layouts/Cardtext"; // Ensure this path is correct
import img5 from "../assets/image/Icon1.png";
import img6 from "../assets/image/Icon2.png";
import img7 from "../assets/image/Icon3.png";
import img8 from "../assets/image/Icon4.png";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

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

// Duplicate 3 times for smooth infinite scroll
const cards = [...originalCards, ...originalCards, ...originalCards];

const Card3 = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollSpeed = 1;

    const smoothScroll = () => {
      if (!carousel) return;

      carousel.scrollLeft += scrollSpeed;

      // When scrolled past 1/3 of the scrollWidth (since we have 3 copies),
      // reset scrollLeft by subtracting 1/3 scrollWidth (jump back by one set),
      // so user won't see a flicker.
      if (carousel.scrollLeft >= (carousel.scrollWidth / 3) * 2) {
        carousel.scrollLeft -= carousel.scrollWidth / 3;
      }

      requestAnimationFrame(smoothScroll);
    };

    // Start smooth scroll
    smoothScroll();

    // Cleanup function to cancel animation frame if component unmounts
    return () => {
      // No need to cancel here as requestAnimationFrame is recursive and self-contained,
      // but if you want, you can implement cancelAnimationFrame logic by saving the ID.
    };
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 ">
      {/* Heading Section */}
      <div
        className="py-8 text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1
          className="text-3xl sm:text-4xl lg:text-[55px] font-bold tracking-[-0.06em] leading-tight sm:leading-[1.2] lg:leading-[1.1]"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Transforming Finances:
          <br />
          <span
            className="text-2xl lg:mx-45 sm:text-4xl lg:text-[55px] bg-gradient-to-b from-[#1445C2] to-[#587EDB] bg-clip-text text-transparent font-bold tracking-[-0.06em]"
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
          Don't just take our word for it. See what our satisfied customers have to{" "}
          <br className="hidden sm:inline" />
          say about our services.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="overflow-hidden w-full scroll-smooth" ref={carouselRef}>
        <div className="flex gap-4  ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-[300px] flex-shrink-0 transition-transform duration-500 ease-in-out"
              data-aos="fade-up"
              data-aos-delay={(index % originalCards.length) * 100}
            >
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

      {/* Buttons Section */}
      <div
        className="flex w-full flex-wrap justify-center mx-10 sm:justify-center gap-3 mt-5 mb-15 sm:gap-4 pb-5"
        data-aos="zoom-in"
      >
        <Link to="/Consultationform">
          <button className="BlueBtn ">
            Request Consultation
          </button>
        </Link>
        <button
          onClick={() => (window.location.href = "tel:+16282004141")}
          className="Call-btn "
        >
          Call Us
        </button>
      </div>
    </div>
  );
};

export default Card3;
