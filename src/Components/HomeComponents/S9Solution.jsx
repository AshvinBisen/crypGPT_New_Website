import React from "react";
import "../../Styles/S9Solution.css";
import tokenImg from "../../assets/Solution/right-robo-img.png";

// Import your custom icons (images)
import aiIcon from "../../assets/Solution/1.png";
import blockchainIcon from "../../assets/Solution/2.png";
import portfolioIcon from "../../assets/Solution/3.png";
import analyticsIcon from "../../assets/Solution/4.png";

const CrypGPTSolution = () => {
  return (
    <section id="solution" className="crypgpt-section">
      <h2 className="section-heading">CrypGPT Solution</h2>

      <div className="crypgpt-wrapper">
        {/* Left Side - Cards */}
        <div className="crypgpt-container">

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
            <div className="absolute top-0 right-[-5px] md:right-0">
                <div className="inline-flex relative">
                    <div className="relative inline-block z-[4] w-[11px] h-[11px] border-[1px] border-[#FFA200] bg-white rotate-45 max-md:w-[10px] max-md:h-[10px] max-md:border-2"></div>
                    <div className="absolute z-[4] h-px sm:w-[70px] md:w-[210px] w-[210px] bg-[linear-gradient(4.38deg,#050505,#FFA200)] top-1/2 right-1/2 -translate-y-1/2 xl:w-[250px] 2xl:w-[290px]"></div>
                    <div className="absolute z-[4] w-px sm:h-[70px] h-[210px] md:h-[210px] mt-[7px] inset-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#FFA200] to-[#050505] sm:h-[70px] xl:h-[100px] 2xl:h-[125px]"></div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 max-md:left-[-5px]">
                <div className="inline-flex relative">
                    <div className="relative inline-block z-[4] w-[11px] h-[11px] border-[3px] border-[#FFA200] bg-white rotate-45 max-md:w-[10px] max-md:h-[10px] max-md:border-2"></div>
                    <div className="absolute z-[4] h-px bg-[linear-gradient(4.38deg,#FFA200,#050505)] left-0 top-1/2 -translate-y-1/2 ml-[7px] sm:w-[70px] md:w-[210px] w-[210px] xl:w-[250px] 2xl:w-[290px]"></div>
                    <div className="absolute bottom-0 left-1/2 translate-x-[-50%] z-[4] w-px md:h-[210px] h-[210px] sm:mb-[7px] bg-[linear-gradient(4.38deg,#FFA200,#050505)] sm:h-[70px] xl:h-[250px] 2xl:h-[290px]"></div>
                </div>
            </div>


            
             <div className="absolute top-[49%] right-[35%] decor-box">
                <div className="inline-flex relative">
                   
                    <div className="absolute z-[4] h-px sm:w-[70px] md:w-[210px] w-[80%px] bg-[linear-gradient(4.38deg,#FFA200,#050505)] top-1/2 left-1/2 -translate-y-1/2  xl:w-[250px] 2xl:w-[290px]"></div>
                     <div className="relative inline-block z-[4] w-[11px] h-[11px] border-[1px] border-[#FFA200] bg-white rotate-45 max-md:w-[10px] max-md:h-[10px] max-md:border-2"></div>
                </div>
            </div>
            <div className="absolute top-[49%] left-[30%] decor-box">
                <div className="inline-flex relative">
                    <div className="relative inline-block z-[4] w-[11px] h-[11px] border-[1px] border-[#FFA200] bg-white rotate-45 max-md:w-[10px] max-md:h-[10px] max-md:border-2"></div>
                    <div className="absolute z-[4] h-px sm:w-[70px] md:w-[210px] w-[80%px] bg-[linear-gradient(4.38deg,#050505,#FFA200)] top-1/2 right-1/2 -translate-y-1/2 xl:w-[250px] 2xl:w-[290px]"></div>
                </div>
            </div>
            

            {/* <div className="home-one-hero-button-wrap">

                <div className="button-shape-wrap left">
                    <div className="button-shape-left"></div>
                    <div className="button-shape-square position-left"></div>
                </div>
       
                <div className="button-shape-wrap right">
                    <div className="button-shape-right"></div>
                    <div className="button-shape-square position-right"></div>
                </div>
                </div> */}



          {/* Card 1 */}
          <div className="crypgpt-card">
            <div className="icon-box">
              <img src={aiIcon} alt="AI Trading" />
            </div>
            <h3>AI-powered crypto trading insights</h3>
            <p>
              AI-powered crypto trading insights harness advanced machine
              learning to analyze massive amounts of market data in real time.
            </p>
          </div>

      


          {/* Card 2 */}
          <div className="crypgpt-card">
            <div className="icon-box">
              <img src={blockchainIcon} alt="Blockchain" />
            </div>
            <h3>Secure blockchain integration -</h3>
            <p>
              Secure blockchain integration ensures data integrity,
              transparency, and tamper-proof transactions across digital
              ecosystems.
            </p>
          </div>


              

          {/* Card 3 */}
          <div className="crypgpt-card">
            <div className="icon-box">
              <img src={portfolioIcon} alt="Portfolio Management" />
            </div>
            <h3>Automated portfolio management -</h3>
            <p>
              Automated portfolio management leverages AI and algorithms to
              optimize investments with minimal human intervention.
            </p>
          </div>

          {/* Card 4 */}
          <div className="crypgpt-card">
            <div className="icon-box">
              <img src={analyticsIcon} alt="Analytics" />
            </div>
            <h3>Real-time market analytics - ChatGPT said:</h3>
            <p>
              Real-time market analytics delivers instant insights into market
              trends, price fluctuations, and trading volumes.
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="crypgpt-image">
          <img src={tokenImg} alt="CrypGPT" />
        </div>
      </div>
    </section>
  );
};

export default CrypGPTSolution;
