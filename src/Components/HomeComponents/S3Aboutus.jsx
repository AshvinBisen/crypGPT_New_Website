import React from "react";
import "../../Styles/s3about.css";

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="bg-transparent border border-white/25 text-white px-5 py-2 rounded-full font-[400] text-[20px] 
        leading-[110%] text-center cursor-pointer transition duration-300 max-w-fit mx-auto mb-[30px] font-['Open_Sans',sans-serif]">About Us</h2>

        <div className="about-card">
          {/* Top Left Shape */}
          

          {/* Text Content */}
          <p className="about-text">
            CrypGPT is more than just a token, it is a complete AI-powered crypto
            ecosystem built for traders, investors, communities, and businesses.
            Our mission is to simplify Web3 by addressing its biggest challenges.
            With AI-driven trading signals and bots, complex trading decisions
            become smarter and easier. Advanced AI detection tools help protect
            users against fraud and scams, ensuring a safer experience.
            Multi-language AI chatbots break down communication barriers, making
            the ecosystem truly global. And with our crypto card and AI-powered
            compliance, cross-border payments become seamless and secure.
          </p>

          <h2 className="about-highlight">
            CrypGPT brings everything together into one powerful ecosystem
            designed for smarter, safer, and faster crypto adoption.
          </h2>

          <div className="absolute top-0 left-[-5px] md:left-0 ">
            <div className="inline-flex relative">
              <div className="relative inline-block z-[4] w-[11px] h-[11px] border-[1px] border-[#FFA200] bg-white rotate-45 max-md:w-[10px] max-md:h-[10px] max-md:border-2"></div>
              <div className="absolute z-[4] h-px sm:w-[70px] md:w-[210px] w-[210px] bg-[linear-gradient(4.38deg,#FFA200,#050505)] top-1/2 left-1/2 -translate-y-1/2  xl:w-[250px] 2xl:w-[290px]"></div>
              <div className="absolute z-[4] w-px sm:h-[70px] h-[210px] md:h-[210px] mt-[7px] inset-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#FFA200] to-[#050505 ] sm:h-[70px] xl:h-[100px] 2xl:h-[125px]"></div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 max-md:right-[-5px]">
            <div className="inline-flex relative">
              <div className="relative inline-block z-[4] w-[11px] h-[11px] border-[3px] border-[#FFA200] bg-white rotate-45 max-md:w-[10px] max-md:h-[10px] max-md:border-2"></div>
              <div className="absolute z-[4] h-px bg-[linear-gradient(4.38deg,#050505,#FFA200)] right-0 top-1/2 -translate-y-1/2 mr-[7px]  sm:w-[70px] md:w-[210px] w-[210px]   xl:w-[250px] 2xl:w-[290px]"></div>
              <div className="absolute bottom-0 left-1/2 translate-x-[-50%] z-[4] w-px md:h-[210px] h-[210px] sm:mb-[7px] bg-[linear-gradient(4.38deg,#FFA200,#050505)] sm:h-[70px] xl:h-[250px] 2xl:h-[290px]"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
