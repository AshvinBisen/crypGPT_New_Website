import React, { useState, useEffect } from "react";
import "../../Styles/S8whychoose.css";

// Import your images
import fusionImg from "../../assets/whychoose/1.png";
import globalImg from "../../assets/whychoose/2.png";
import earningImg from "../../assets/whychoose/3.png";
import aiImg from "../../assets/whychoose/4.svg";
import communityImg from "../../assets/whychoose/5.svg";

const WhyCrypGPT = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(3);

  const cards = [
    {
      img: fusionImg,
      title: "Fusion of AI + Blockchain",
      description:
        "Combining AI intelligence with blockchain security for the smartest, safest, and most efficient crypto ecosystem ever.",
    },
    {
      img: globalImg,
      title: "Global Adoption",
      description:
        "CrypGPT drives adoption across industries—finance, trading, payments, and communities—bridging Web2 and Web3 seamlessly.",
    },
    {
      img: earningImg,
      title: "Earning for Everyone",
      description:
        "Multiple income streams including staking, trading, move-to-earn, and chat-to-earn models for users worldwide.",
    },
    {
      img: aiImg,
      title: "Strong Roadmap",
      description:
        "Backed by powerful partnerships and a strategic roadmap designed to scale adoption and deliver long-term growth.",
    },
    {
      img: communityImg,
      title: "Secure & Transparent",
      description:
        "Blockchain-powered transparency with AI-powered fraud detection ensures a safe and decentralized ecosystem.",
    },
  ];

  // Responsive slidesPerPage logic
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) {
        setSlidesPerPage(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerPage(2);
      } else {
        setSlidesPerPage(3);
      }
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const maxIndex = cards.length - slidesPerPage;

  return (
    <section id="whycrypgpt" className="whycrypgpt">
      <h2 className="section-title">Why CrypGPT</h2>

      <div className="slider-container relative">
        {/* Top-left Shape */}
        <div className="absolute top-0 left-[5px] md:left-[5px] ">
            <div className="inline-flex relative">
              <div className="relative inline-block z-[4] w-[11px] h-[11px] border-[1px] border-[#FFA200] bg-white rotate-45 max-md:w-[10px] max-md:h-[10px] max-md:border-2"></div>
              <div className="absolute z-[4] h-px sm:w-[70px] md:w-[210px] w-[210px] bg-[linear-gradient(4.38deg,#FFA200,#050505)] top-1/2 left-1/2 -translate-y-1/2  xl:w-[250px] 2xl:w-[290px]"></div>
              <div className="absolute z-[4] w-px sm:h-[70px] h-[210px] md:h-[210px] mt-[7px] inset-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#FFA200] to-[#050505 ] sm:h-[70px] xl:h-[100px] 2xl:h-[125px]"></div>
            </div>
          </div>

        {/* Cards */}
        <div className="slider-wrapper">
          {cards.slice(currentIndex, currentIndex + slidesPerPage).map((card, index) => (
            <div className="card" key={index}>
              <div className="icon">
                <img src={card.img} alt={card.title} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom-right Shape */}
        <div className="absolute bottom-0 right-[5px] max-md:right-[5px]">
            <div className="inline-flex relative">
              <div className="relative inline-block z-[4] w-[11px] h-[11px] border-[3px] border-[#FFA200] bg-white rotate-45 max-md:w-[10px] max-md:h-[10px] max-md:border-2"></div>
              <div className="absolute z-[4] h-px bg-[linear-gradient(4.38deg,#050505,#FFA200)] right-0 top-1/2 -translate-y-1/2 mr-[7px]  sm:w-[70px] md:w-[210px] w-[210px]   xl:w-[250px] 2xl:w-[290px]"></div>
              <div className="absolute bottom-0 left-1/2 translate-x-[-50%] z-[4] w-px md:h-[210px] h-[210px] sm:mb-[7px] bg-[linear-gradient(4.38deg,#FFA200,#050505)] sm:h-[70px] xl:h-[250px] 2xl:h-[290px]"></div>
            </div>
        </div>
      </div>

      {/* Dots */}
      <div className="dots">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default WhyCrypGPT;
