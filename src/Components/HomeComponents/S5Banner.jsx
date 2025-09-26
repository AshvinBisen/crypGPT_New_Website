import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import tokenImg1 from "../../assets/banner/1.png";
import tokenImg2 from "../../assets/banner/2.png";
import tokenImg3 from "../../assets/banner/1.png";
import tokenImg4 from "../../assets/banner/2.png";

const slides = [tokenImg1, tokenImg2, tokenImg3, tokenImg4];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-[90%] mx-auto bg-black flex flex-col items-center justify-center">
      {/* Upcoming Tag */}
      <div className="bg-transparent border border-white/25 text-white px-5 py-2 rounded-full font-[400] text-[20px] leading-[110%] text-center cursor-pointer transition duration-300 max-w-fit mx-auto mb-10 font-['Open_Sans',sans-serif]">
        Upcoming
      </div>

      {/* Slides */}
      <div className="w-full flex items-center justify-center">

      <img
  src={slides[current]}
  alt="banner"
  onClick={() => {
    if (current === 0) {
      window.open("https://coinmarketcap.com/currencies/crypgpt-token/", "_blank");
    } else if (current === 2) {
      window.open("https://coinmarketcap.com/currencies/crypgpt-token/", "_blank");
    }
  }}
  className="rounded-lg border border-[#FFF] shadow-[0_0_20px_rgba(255,140,0,0.5)] w-full h-auto max-h-screen object-contain bg-black transition-all duration-700 ease-in-out cursor-pointer"
/>

      </div>

      {/* Prev Button */}
<button
  onClick={prevSlide}
  className="absolute top-1/2 left-5 lg:w-12 lg:h-12 sm:w-10 sm:h-10 w-8 h-8 bg-[#FFF] border-white text-[#CC8200] lg:p-2 sm:p-1 p-1 rounded-full hover:bg-white/70 transition"
>
  <HiChevronLeft size={30} className="sm:text-[22px] xs:text-[18px] text-[12px]" />
</button>

{/* Next Button */}
<button
  onClick={nextSlide}
  className="absolute top-1/2 right-5 lg:w-12 lg:h-12 sm:w-10 sm:h-10 w-8 h-8 bg-[#FFF] border-white text-[#CC8200] lg:p-2 sm:p-1 p-1 rounded-full hover:bg-white/70 transition"
>
  <HiChevronRight size={30} className="sm:text-[22px] xs:text-[18px] text-[12px]" />
</button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-yellow-400" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerSlider;


