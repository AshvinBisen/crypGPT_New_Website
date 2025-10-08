import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tokenImg1 from "../../assets/banner/2.png"; 
import tokenImg2 from "../../assets/banner/1.png";
import tokenImg3 from "../../assets/banner/2.png";
import tokenImg4 from "../../assets/banner/1.png";

const slides = [
  { id: 1, image: tokenImg1, link: "https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0xC643F4Dd66a10955e53E3f67A81Ba54703d3B7FB" },
  { id: 2, image: tokenImg2, link: "https://coinmarketcap.com/currencies/crypgpt-token/" },
  { id: 3, image: tokenImg3, link: "https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0xC643F4Dd66a10955e53E3f67A81Ba54703d3B7FB" },
  { id: 4, image: tokenImg4, link: "https://coinmarketcap.com/currencies/crypgpt-token/" },
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // AutoPlay every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Calculate previous and next slide indices
  const prevIndex = (current - 1 + slides.length) % slides.length;
  const nextIndex = (current + 1) % slides.length;

  return (
    <section id="banner" className="relative w-full bg-black sm:py-3 md:py-6 py-10 flex flex-col items-center overflow-hidden">
      {/* Upcoming Tag */}
      {/* <div className="bg-transparent border border-white/25 text-white px-5 py-2 rounded-full font-[400] text-[20px] 
        leading-[110%] text-center cursor-pointer transition duration-300 max-w-fit mx-auto mb-[20px] font-['Open_Sans',sans-serif]">
        Upcoming
      </div> */}

      {/* Slider Container */}
      <div className="relative w-[100%] md:w-[70%] flex items-center justify-center pt-3 pb-5 m-8 ">

        {/* Slide Container with Prev, Current, and Next */}
        <div className="relative w-full h-full flex justify-center items-center pb-6 px-6 gap-8 overflow-hidden">
          
          {/* Previous Slide */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={slides[prevIndex].id}
              src={slides[prevIndex].image}
              alt="prev banner"
              className="rounded-lg border border-[#FFF] shadow-[0_0_20px_rgba(255,140,0,0.5)] max-h-[400px] object-contain w-[70%] opacity-50"
              custom={direction}
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 0.5 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* Current Slide */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={slides[current].id}
              src={slides[current].image}
              alt="banner"
              onClick={() => {
                if (slides[current].link) {
                  window.open(slides[current].link, "_blank");
                }
              }}
              className={`rounded-lg border border-[#FFF] shadow-[0_0_20px_rgba(255,140,0,0.5)] max-h-[400px] object-contain w-[70%] z-10 ${
                slides[current].link ? "cursor-pointer" : ""
              }`}
              custom={direction}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* Next Slide */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={slides[nextIndex].id}
              src={slides[nextIndex].image}
              alt="next banner"
              className="rounded-lg border border-[#FFF] shadow-[0_0_20px_rgba(255,140,0,0.5)] max-h-[400px] object-contain w-[70%] opacity-50"
              custom={direction}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 0.5 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex mt-5 gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > current ? 1 : -1);
              setCurrent(idx);
            }}
            className={`w-[22px] h-[22px] rounded-full transition-all ${
              idx === current
                ? "bg-[radial-gradient(84.09%_84.09%_at_27.27%_6.82%,_#FFFFFF_0%,_#FEBE0E_52.14%,_#896500_100%)]"
                : "bg-[#424242] border-[0.5px] border-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerSlider;


// import React, { useState, useEffect } from "react";
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
// import tokenImg1 from "../../assets/banner/1.png";
// import tokenImg2 from "../../assets/banner/2.png";
// import tokenImg3 from "../../assets/banner/1.png";
// import tokenImg4 from "../../assets/banner/2.png";

// const slides = [tokenImg1, tokenImg2, tokenImg3, tokenImg4];

// const BannerSlider = () => {
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   useEffect(() => {
//     const timer = setInterval(nextSlide, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative w-[90%] mx-auto bg-black flex flex-col items-center justify-center">
//       {/* Upcoming Tag */}
//        {/* <div className="bg-transparent border border-white/25 text-white px-5 py-2 rounded-full font-[400] text-[20px] leading-[110%] text-center cursor-pointer transition duration-300 max-w-fit mx-auto mb-10 font-['Open_Sans',sans-serif]">
//         Upcoming
//       </div> */}

//       {/* Slides */}
//       <div className="w-full flex items-center justify-center">

//       <img
//   src={slides[current]}
//   alt="banner"
//   onClick={() => {
//     if (current === 0) {
//       window.open("https://coinmarketcap.com/currencies/crypgpt-token/", "_blank");
//     } else if (current === 2) {
//       window.open("https://coinmarketcap.com/currencies/crypgpt-token/", "_blank");
//     }
//   }}
//   className="rounded-lg border border-[#FFF] shadow-[0_0_20px_rgba(255,140,0,0.5)] w-full h-auto max-h-screen object-contain bg-black transition-all duration-700 ease-in-out cursor-pointer"
// />

//       </div>

//       {/* Prev Button */}
//      <button
//         onClick={prevSlide}
//         className="absolute top-[40%] left-4 lg:w-10 lg:h-10 sm:w-8 sm:h-8 w-6 h-6 bg-[#FFF] border-white text-[#CC8200] lg:p-[8px] sm:p-[2px] p-[1px] rounded-full hover:bg-white/70 transition sm:hidden block"
//       >
//         <HiChevronLeft size={30} className="sm:text-[20px]  text-[6px]" />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute  top-[40%] right-4 lg:w-10 lg:h-10 sm:w-8 sm:h-8 w-6 h-6 bg-[#FFF] border-white text-[#CC8200] lg:p-[8px] sm:p-[2px] p-[1px] rounded-full hover:bg-white/70 transition sm:hidden block"
//       >
//         <HiChevronRight size={30} className="sm:text-[20px]  text-[6px]" />
//       </button>


//       {/* Dots */}
//       <div className="absolute bottom-6 w-full flex justify-center gap-3">
//         {slides.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrent(idx)}
//             className={`w-3 h-3 rounded-full ${
//               idx === current ? "bg-yellow-400" : "bg-gray-500"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BannerSlider;


