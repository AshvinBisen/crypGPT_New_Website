import React from "react";
import { motion } from "framer-motion";
import "../../Styles/s2heroimage.css"; 
import bgImage from "../../assets/Hero_img/herobg.png"; 

const stats = [
  { value: "1K+", label: "AI Chatbot" },
  { value: "92%", label: "AI Crypto" },
  { value: "30+", label: "AI Trading" },
  { value: "100%", label: "AI Identity" },
];

// Container animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

// Card animation
const item = {
  hidden: { opacity: 0, y: 100, rotate: -10, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
  whileHover: {
    scale: 1.05,
    rotate: 2,
    boxShadow: "0px 8px 25px rgba(0,0,0,0.2)",
  },
};

const S2HeroImage = () => {
  return (
    <section className="hero-section">
      <div 
        className="hero-container" 
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <motion.div 
          className="stats-wrapper"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }} // trigger on scroll
        >
          {/* Left column */}
          <div className="stats-column">
            {stats.slice(0, 2).map((stat, i) => (
              <motion.div
                key={i}
                className="stat-card"
                variants={item}
                whileHover="whileHover"
              >
                <motion.h3
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.3, type: "spring" }}
                >
                  {stat.value}
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.4 }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* Right column */}
          <div className="stats-column">
            {stats.slice(2, 4).map((stat, i) => (
              <motion.div
                key={i}
                className="stat-card"
                variants={item}
                whileHover="whileHover"
              >
                <motion.h3
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: (i + 2) * 0.3, type: "spring" }}
                >
                  {stat.value}
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: (i + 2) * 0.4 }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Button section */}
      <motion.div
        className="home-one-hero-button-wrap"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="button-shape-wrap left">
          <div className="button-shape-left"></div>
          <div className="button-shape-square position-left"></div>
        </div>

        <motion.div 
          className="button-wrap"
          whileHover={{ scale: 1.08, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <a 
            href="https://t.me/crypgpttoken"  
            className="secondary-button" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
        </motion.div>

        <div className="button-shape-wrap right">
          <div className="button-shape-right"></div>
          <div className="button-shape-square position-right"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default S2HeroImage;
