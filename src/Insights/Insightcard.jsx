import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS library


export default function Insightcard() {
      useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <div>
  <div
    className="w-full h-auto px-4 md:px-20 py-16 bg-cover bg-center bg-[url('./assets/image/insightscard.png')]"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div className="text-white text-center" data-aos="zoom-in" data-aos-delay="200">
      <h1 className="font-bold text-[32px] md:text-[60px]">In the Spotlight</h1>
      <p className="mt-4 text-sm md:text-lg">
        Discover expert perspectives on the hottest business topics and trends
        <br className="hidden md:block" />
        driving impact and pioneering change.
      </p>
    </div>

    <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
      {/* Card 1 */}
      <div
        className="w-full md:w-[32%] bg-opacity-10 rounded-xl overflow-hidden text-white hover:scale-[1.01] transition"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <Link to="/BlogArticle">
          <div className="w-full h-70 bg-cover bg-center bg-[url('./assets/image/image1.png')] cursor-pointer">
            <div className="flex flex-wrap gap-2 p-4">
              <button className="bg-white px-4 py-2 rounded-lg text-blue-600 border-2 font-semibold">
                Survey
              </button>
            </div>
          </div>
        </Link>
        <div className="p-4">
          <span className="text-sm block mb-2">Aug 25, 2024</span>
          <p className="font-semibold text-xl mb-3">
            RAHA Financial Pulse Survey: What we learned in 2024
          </p>
          <p className="text-sm mb-4">
            In 2024, the Financial Pulse Survey revealed significant insights into how tariffs are transforming
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="w-full md:w-[32%] bg-opacity-10 rounded-xl overflow-hidden text-white hover:scale-[1.01] transition"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <Link to="/BlogArticle">
          <div className="w-full h-70 object-cover bg-cover bg-center bg-[url('./assets/image/image2.png')]">
            <div className="flex flex-wrap gap-2 p-4">
              <button className="bg-white px-4 py-2 rounded-lg text-blue-600 border-2 font-semibold">
                Insight
              </button>
            </div>
          </div>
        </Link>
        <div className="p-4">
          <span className="text-sm block mb-2">Aug 25, 2024</span>
          <p className="font-semibold text-xl mb-3">
            Global Semiconductor Industry Outlook for 2025
          </p>
          <p className="text-sm mb-4">
            The global semiconductor industry is poised for significant transformation by 2025, driven
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div
        className="w-full md:w-[32%] bg-opacity-10 rounded-xl overflow-hidden text-white hover:scale-[1.01] transition"
        data-aos="fade-left"
        data-aos-delay="700"
      >
        <Link to="/BlogArticle">
          <div className="w-full h-70 object-cover bg-cover bg-center bg-[url('./assets/image/image3.png')]">
            <div className="flex flex-wrap gap-2 p-4">
              <button className="bg-white px-4 py-2 rounded-lg text-blue-600 border-2 font-semibold">
                Report
              </button>
            </div>
          </div>
        </Link>
        <div className="p-4">
          <span className="text-sm block mb-2">Aug 25, 2024</span>
          <p className="font-semibold text-xl mb-3">
            The Impact of Artificial Intelligence in the Finance Sector
          </p>
          <p className="text-sm mb-4">
            In the rapidly evolving finance sector, artificial intelligence is revolutionizing how businesses
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
