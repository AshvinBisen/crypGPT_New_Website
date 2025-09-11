import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import "../../Styles/S12faq.css";
import faqimg from "../../assets/faqimg.png"; 

const faqData = [
  {
    question: "What is CrypGPT?",
    answer: "CrypGPT is an AI-powered blockchain solution designed to revolutionize digital transactions and decentralized apps.",
  },
  {
    question: "What are the key features of CrypGPT?",
    answer: "It includes fast transactions, secure blockchain, AI integration, and a growing ecosystem for developers and users.",
  },
  {
    question: "How can I purchase?",
    answer: "You can purchase CrypGPT tokens via leading crypto exchanges or through our official platform.",
  },
  {
    question: "Where can I use CrypGPT?",
    answer: "CrypGPT can be used for payments, decentralized apps, staking, and other blockchain-based services.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <h2 className="faq-heading">FAQ'S</h2>
      <div className="faq-container">
        <div className="faq-left">
          {faqData.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`} 
              key={index}
              onClick={() => toggleFAQ(index)}
            >
            {/* Decorative shapes same as your code */}
                    <div className="absolute top-0 left-[-5px] md:left-0 ">
                        <div className="inline-flex relative">
                        <div className="relative inline-block z-[4] w-[11px] h-[11px] border-[1px] border-[#FFA200] bg-white rotate-45 max-md:w-[10px] max-md:h-[10px] max-md:border-2"></div>
                        <div className="absolute z-[4] h-px sm:w-[70px] md:w-[120px] w-[150px] bg-[linear-gradient(4.38deg,#FFA200,#050505)] top-1/2 left-1/2 -translate-y-1/2  xl:w-[150px] 2xl:w-[160px]"></div>
                        <div className="absolute z-[4] w-px  h-[30px]  mt-[7px] inset-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#FFA200] to-[#050505 ]"></div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 max-md:right-[-5px]">
                        <div className="inline-flex relative">
                        <div className="relative inline-block z-[4] w-[11px] h-[11px] border-[3px] border-[#FFA200] bg-white rotate-45 max-md:w-[10px] max-md:h-[10px] max-md:border-2"></div>
                        <div className="absolute z-[4] h-px bg-[linear-gradient(4.38deg,#050505,#FFA200)] right-0 top-1/2 -translate-y-1/2 mr-[7px]  sm:w-[70px] md:w-[120px] w-[150px]   xl:w-[150px] 2xl:w-[260px]"></div>
                        <div className="absolute bottom-0 left-1/2 translate-x-[-50%] z-[4] w-px  h-[30px] sm:mb-[7px] bg-[linear-gradient(4.38deg,#FFA200,#050505)] "></div>
                        </div>
                    </div>


              <div className="faq-question p-4">
                <span className="faq-q">Q{index + 1}</span>
                <span className="faq-text">{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={32} />}
                </span>
              </div>
              {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>

        <div className="faq-right">
          <img src={faqimg} alt="FAQ Illustration" className="faq-img" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
