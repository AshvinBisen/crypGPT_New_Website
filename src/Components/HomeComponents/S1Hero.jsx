import React from "react";
import { motion } from "framer-motion";
import solid from "../../assets/Hero_img/solidprof.png";
import videoBg from "../../assets/bg_hero.mp4"; 

const HeroSection = () => {
  return (
    <section id="hero" className="relative text-white min-h-screen flex items-center justify-center overflow-hidden hero-h">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/40 via-black/70 to-black/90" />

       

      {/* Content */}
      <div className="relative z-10 max-w-7xl text-center px-6 sm:px-2 xs:px-2">
      
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-6 md:px-12 py-1 border border-[#FFFFFF42] rounded-full text-sm md:text-[16px] font-['Open_Sans'] font-normal text-center"
        >
          Join the future of AI + Web3 today
        </motion.div>

        {/* Title */}
        <div className="max-w-7xl mt-8 mb-6 sm:px-[10px] px-4 xs:px-[10px] lg:px-[60px] py-6 relative padd">

        <div className="absolute top-0 left-[5px] md:left-[5px] ">
            <div className="inline-flex relative">
              <div className="relative inline-block z-[4] w-[11px] h-[11px] border-[1px] border-[#FFA200] bg-white rotate-45 max-md:w-[10px] max-md:h-[10px] max-md:border-2"></div>
              <div className="absolute z-[4] h-px width sm:w-[70px] md:w-[210px] w-[260px] bg-[linear-gradient(4.38deg,#FFA200,#050505)] top-1/2 left-1/2 -translate-y-1/2  xl:w-[250px] 2xl:w-[290px]"></div>
              <div className="absolute z-[4] w-px xs:h-[40px] sm:h-[70px] height h-[210px] md:h-[210px] mt-[7px] inset-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#FFA200] to-[#050505 ] sm:h-[70px] xl:h-[100px] 2xl:h-[125px]"></div>
            </div>
          </div>

        <div className="absolute bottom-0 right-[5px] max-md:right-[5px]">
            <div className="inline-flex relative">
              <div className="relative inline-block z-[4] w-[11px] h-[11px] border-[3px] border-[#FFA200] bg-white rotate-45 max-md:w-[10px] max-md:h-[10px] max-md:border-2"></div>
              <div className="absolute z-[4] h-px bg-[linear-gradient(4.38deg,#050505,#FFA200)] width right-0 top-1/2 -translate-y-1/2 mr-[7px]  sm:w-[70px] md:w-[210px] w-[260px]  xs:w-[40px] xl:w-[250px] 2xl:w-[290px]"></div>
              <div className="absolute bottom-0 left-1/2 translate-x-[-50%] z-[4] height w-px md:h-[210px] h-[210px] sm:mb-[7px] bg-[linear-gradient(4.38deg,#FFA200,#050505)] sm:h-[70px] xm:h-[70px] xl:h-[250px] 2xl:h-[290px]"></div>
            </div>
        </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl leading-tight font-['Open_Sans'] font-semibold lg:text-[108px]"
          >
            <span className="bg-gradient-to-r from-white to-[#FFBF00] bg-clip-text text-transparent">
              AI-Powered
            </span>{" "}
            Future of Web3 is Here
          </motion.h1>
          {/* Decorative shapes yaha same hi rahenge */}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 font-['Open_Sans'] font-normal text-[16px] md:text-[20px] lg:text-[25px] text-[#FFFFFF] max-w-[600px] mx-auto"
        >
          CrypGPT brings together Artificial Intelligence and Blockchain to
          transform how we trade, invest, communicate, and build communities
        </motion.p>

   
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >

         <a
            href="https://crypgpts-token.gitbook.io/crypgpts-token/" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-[20px] rounded-lg border border-[#CD900380] bg-gradient-to-r from-[#FFA200] via-[#FFFFFF] to-[#FFA200] text-[black] shadow-[inset_0px_0px_35px_0px_#FFB2004D] font-semibold hover:bg-[linear-gradient(90deg,#FFA200_20px,#FFFFFF_50.48%,#FFA200_80%)]  transition inline-block text-center"
          >
            Whitepaper
          </a>

        <a
            href="https://t.me/crypgpttoken" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-[#FFB20017] shadow-[inset_0px_0px_5px_0px_#FFB2004D] font-semibold hover:bg-yellow-500 hover:text-black transition inline-block text-center"
          >
            Join Community
          </a>

          <a
            href="https://app.solidproof.io/projects/crypgpt" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-[#FFB20017] shadow-[inset_0px_0px_5px_0px_#FFB2004D] font-semibold hover:bg-yellow-500 transition inline-block text-center"
          >
            <img src={solid} alt="SolidProof" className="max-w-[121px]" />
          </a>

         
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
