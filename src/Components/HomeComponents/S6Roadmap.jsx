import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../../Styles/S6Roadmap.css";
import roadImg from "../../assets/Roadmap/roadimg.png";

const roadmapData = [
  {
    year: "2025",
    quarter: "Q3",
    points: [
      "Token Launch, Website & Whitepaper Release, Community Building",
      "Website & Whitepaper Release",
      "SolidProof Audit Completed",
      "Token Launch on Blofien Exchange",
      "Listings on CMC, CG, Coin360, CoinBubble",
    ],
  },
  {
    year: "2025",
    quarter: "Q4",
    points: [
      "Launch of AI Trading Signal Assistant",
      "Telegram AI Bot Integration",
      "Strategic Partnerships",
    ],
  },
  {
    year: "2026",
    quarter: "Q1",
    points: [
      "AI Portfolio Management Tool",
      "Multi-language Chatbot Beta",
      "Global Community Expansion",
    ],
  },
  {
    year: "2026",
    quarter: "Q2",
    points: [
      "Crypto Card Launch (Fiat + Crypto Payments)",
      "AI Fraud Detection Live",
    ],
  },
  {
    year: "2026",
    quarter: "Q3",
    points: [
      "Move-to-Earn + Chat-to-Earn Rollout",
      "Decentralised Knowledge Hub Alpha",
      "Large-Scale AI Marketplace Launch",
    ],
  },
  {
    year: "2026",
    quarter: "Q4",
    points: [
      "Full Ecosystem Expansion",
      "Top Exchange Listings (Tier 1 CEX)",
      "1M+ Users in the CrypGPT Ecosystem",
    ],
  },
  
];

const Roadmap = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (!ref) return null;
      return new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          });
        },
        { threshold: 0.5 }
      ).observe(ref);
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && refs.current[index]) {
          observer.unobserve(refs.current[index]);
        }
      });
    };
  }, []);

  return (
    <section id="roadmap" className="roadmap-section">
      <div className="roadmap-heading">
        <h2 className="bg-transparent border border-white/25 text-white px-5 py-2 rounded-full font-[400] text-[20px] 
        leading-[110%] text-center cursor-pointer transition duration-300 max-w-fit mx-auto mb-[5px] font-['Open_Sans',sans-serif]">
        Roadmap
        </h2>
      </div>

      {/* Left Image */}
      <div className="roadmap-left">
        <img src={roadImg} alt="roadmap" className="roadmap-image" />
      </div>

      {/* Right Scroll Content */}
      <div className="roadmap-right">
        {roadmapData.map((item, index) => (
          <motion.div
            key={index}
            ref={(el) => (refs.current[index] = el)}
            className={`roadmap-card ${
              activeIndex === index ? "active" : "inactive"
            }`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: activeIndex === index ? 1 : 0.8,
            }}
            transition={{ duration: 0.5 }}
          >
            {/* Timeline Box */}
            <div className="roadmap-time">
              <span className="year">{item.year}</span>
              <span className="quarter">{item.quarter}</span>
            </div>

            {/* Content */}
            <div className="roadmap-content">
              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
