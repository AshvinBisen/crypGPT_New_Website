import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import tokenImg1 from "../../assets/banner/banner 1.png"; 
import tokenImg2 from "../../assets/banner/1.png";
import tokenImg3 from "../../assets/banner/2.png";

const slides = [
  // { id: 1, image: tokenImg1 },
  { id: 2, image: tokenImg2 },
  { id: 3, image: tokenImg3 },
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
    <section id="banner" className="relative w-full bg-black sm:py-3 md:py-6 py-16 flex flex-col items-center overflow-hidden">
      {/* Upcoming Tag */}
      <div className="bg-transparent border border-white/25 text-white px-5 py-2 rounded-full font-[400] text-[20px] 
        leading-[110%] text-center cursor-pointer transition duration-300 max-w-fit mx-auto mb-[20px] font-['Open_Sans',sans-serif]">
        Upcoming
      </div>

      {/* Slider Container */}
      <div className="relative w-[90%] md:w-[70%] flex items-center justify-center  py-5 m-8 ">
        {/* Left Glow Border */}
        <div className="absolute top-0 left-[-5px] md:left-[-5px]">
          <div className="inline-flex relative">
            <div className="relative inline-block z-[4] w-[11px] h-[11px] border-[1px] border-[#FFA200] bg-white rotate-45 max-md:w-[10px] max-md:h-[10px] max-md:border-2"></div>
            <div className="absolute z-[4] h-px sm:w-[70px] md:w-[210px] w-[210px] bg-[linear-gradient(4.38deg,#FFA200,#050505)] top-1/2 left-1/2 -translate-y-1/2 xl:w-[250px] 2xl:w-[290px]"></div>
            <div className="absolute z-[4] w-px sm:h-[70px] h-[210px] md:h-[210px] mt-[7px] inset-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#FFA200] to-[#050505] sm:h-[70px] xl:h-[100px] 2xl:h-[125px]"></div>
          </div>
        </div>
        <div className="absolute bottom-0 right-[-5px] max-md:right-[-5px]">
          <div className="inline-flex relative">
            <div className="relative inline-block z-[4] w-[11px] h-[11px] border-[3px] border-[#FFA200] bg-white rotate-45 max-md:w-[10px] max-md:h-[10px] max-md:border-2"></div>
            <div className="absolute z-[4] h-px bg-[linear-gradient(4.38deg,#050505,#FFA200)] right-0 top-1/2 -translate-y-1/2 mr-[7px] sm:w-[70px] md:w-[210px] w-[210px] xl:w-[250px] 2xl:w-[290px]"></div>
            <div className="absolute bottom-0 left-1/2 translate-x-[-50%] z-[4] w-px md:h-[210px] h-[210px] sm:mb-[7px] bg-[linear-gradient(4.38deg,#FFA200,#050505)] sm:h-[70px] xl:h-[250px] 2xl:h-[290px]"></div>
          </div>
        </div>

        {/* Slide Container with Prev, Current, and Next */}
        <div className="relative w-full h-full flex justify-center items-center py-6 px-6 gap-8 overflow-hidden">
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
          {/* <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={slides[current].id}
              src={slides[current].image}
              alt="banner"
              className="rounded-lg border border-[#FFF] shadow-[0_0_20px_rgba(255,140,0,0.5)] max-h-[400px] object-contain w-[70%] z-10"
              custom={direction}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence> */}


          {/* Current Slide */}
<AnimatePresence initial={false} custom={direction}>
  <motion.img
    key={slides[current].id}
    src={slides[current].image}
    alt="banner"
    onClick={() => {
      if (slides[current].id === 3) {
        window.open("https://t.me/CrypGpt_airdrop_bot", "_blank");
      }
    }}
    className={`rounded-lg border border-[#FFF] shadow-[0_0_20px_rgba(255,140,0,0.5)] max-h-[400px] object-contain w-[70%] z-10 ${
      slides[current].id === 3 ? "cursor-pointer" : ""
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