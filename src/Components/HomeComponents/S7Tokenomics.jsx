import React from "react";
import "../../Styles/S7Tokenomics.css";
import tokenImg from "../../assets/Tokenomics/tokenomics.png"; 

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="tokenomics-section">
      <h2 className="tokenomics-title">Tokenomics</h2>

      <div className="tokenomics-container">
      
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
      
        {/* Left Side */}
        <div className="tokenomics-left">
          <div className="token-card">
            <div className="text-white font-Open_Sans font-normal text-[20px] leading-[120%] text-center">Token</div>
            <div className="font-Open_Sans font-normal text-[24px] leading-[120%] text-center align-middle 
   transition-all duration-300 ease-in-out max-w-[365px] 
   bg-gradient-to-r from-[#FFBF00] from-30% to-white bg-clip-text text-transparent"> CrypGPT</div>
          </div>
          <div className="token-card">
            <div className="text-white font-Open_Sans font-normal text-[20px] leading-[120%] text-center">Symbol</div>
            <div className="font-Open_Sans font-normal text-[24px] leading-[120%] text-center align-middle 
   transition-all duration-300 ease-in-out max-w-[365px] 
   bg-gradient-to-r from-[#FFBF00] from-30% to-white bg-clip-text text-transparent"> CGPT</div>
          </div>
          <div className="token-card">
            <div className="text-white font-Open_Sans font-normal text-[20px] leading-[120%] text-center">Supply</div>
            <div className="font-Open_Sans font-normal text-[24px] leading-[120%] text-center align-middle 
   transition-all duration-300 ease-in-out max-w-[365px] 
   bg-gradient-to-r from-[#FFBF00] from-30% to-white bg-clip-text text-transparent"> 1 Billion</div>
          </div>
          <div className="token-card">
            <div className="text-white font-Open_Sans font-normal text-[20px] leading-[120%] text-center">Network</div>
            <div className="font-Open_Sans font-normal text-[24px] leading-[120%] text-center align-middle 
   transition-all duration-300 ease-in-out max-w-[365px] 
   bg-gradient-to-r from-[#FFBF00] from-30% to-white bg-clip-text text-transparent"> Solana</div>
          </div>
          <div className="token-card">
            <div className="text-white font-Open_Sans font-normal text-[20px] leading-[120%] text-center">Decimal</div>
            <div className="font-Open_Sans font-normal text-[24px] leading-[120%] text-center align-middle 
   transition-all duration-300 ease-in-out max-w-[365px] 
   bg-gradient-to-r from-[#FFBF00] from-30% to-white bg-clip-text text-transparent"> 9</div>
          </div>


{/* 
          <div className="token-card"><span>Symbol</span> CGPT</div>
          <div className="token-card"><span>Supply</span> 1 Billion</div>
          <div className="token-card"><span>Network</span> Solana</div>
          <div className="token-card"><span>Decimal</span> 9</div> */}
        </div>

        {/* Right Side (Image) */}
        <div className="tokenomics-right">
          <img src={tokenImg} alt="Tokenomics" className="tokenomics-image" />
        </div>
      </div>

    </section>
  );
};

export default Tokenomics;
