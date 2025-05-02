import { useEffect, useRef } from "react";
import Cardtext from "../Layouts/Cardtext";
import img1 from "../assets/image/Icon1.png";
import img2 from "../assets/image/Icon2.png";
import img3 from "../assets/image/Icon3.png";
import img4 from "../assets/image/Icon4.svg";
import img5 from "../assets/image/Icon1.png";
import img6 from "../assets/image/Icon2.png";
import img7 from "../assets/image/Icon3.png";
import img8 from "../assets/image/Icon4.svg";


const TestimonialsSlider = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 320; // har step me slide
        // reset to start if reached end
        if (
          carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
          carouselRef.current.scrollWidth
        ) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  const data = [
    {
      text: "We've been working with Raha Financials for years and they've always provided us with top-notch service.",
      img: img8,
      title: "Cody Fisher",
      parah: "Deloitte",
    },
    {
      text: "I can't recommend Raha Financials enough! Their team is extremely knowledgeable.",
      img: img5,
      title: "Jenny Wilson",
      parah: "Behance",
    },
    {
      text: "As a small business owner, I rely on Raha Financials to handle all my accounting needs.",
      img: img7,
      title: "Ronald Richards",
      parah: "Razer",
    },
    {
      text: "They are always up-to-date with the latest tax laws and regulations.",
      img: img6,
      title: "Eleanor Pena",
      parah: "Wise",
    },
    {
      text: "Raha Financials has transformed the way we manage our finances.",
      img: img3,
      title: "Savannah Nguyen",
      parah: "Stripe",
    },
    {
      text: "Professional, reliable, and highly efficient!",
      img: img2,
      title: "Courtney Henry",
      parah: "Shopify",
    },
    {
      text: "Very impressed with the personalized service and support.",
      img: img1,
      title: "Darrell Steward",
      parah: "Amazon",
    },
    {
      text: "Our accounting is now stress-free thanks to Raha Financials.",
      img: img4,
      title: "Albert Flores",
      parah: "Microsoft",
    },
  ];

  return (
    <div
      className="carousel-wrapper flex gap-5 overflow-x-hidden scrollbar-hide"
      ref={carouselRef}
    >
      <div className="carousel flex gap-4 w-max">
        {data.map((item, index) => (
          <Cardtext
            key={index}
            text={item.text}
            img={item.img}
            title={item.title}
            parah={item.parah}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
