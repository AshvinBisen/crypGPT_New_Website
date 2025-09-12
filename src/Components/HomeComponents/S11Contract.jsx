import React, { useState } from "react";
import "../../Styles/ContractAddress.css";
import sol from '../../assets/Solana_logo.png'
import bsc from '../../assets/bscscan_logo.png'

const ContractAddress = () => {
  const [copied, setCopied] = useState(null);

  // अलग-अलग Contract Addresses
  const solanaAddress = "DXPBSDFBfCBscTWAqZdqVp78vprtmmMCwBaZMSoPzNBi";
  const bep20Address = "0xc643f4dd66a10955e53e3f67a81ba54703d3b7fb";

  // Dynamic copy function
  const copyToClipboard = (type, address) => {
    navigator.clipboard.writeText(address);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contractaddress" className="contract-section">
      {/* Title */}
      <h2 className="contract-title">Contract Address</h2>

      {/* Solana Contract */}
      <div className="contract-wrapper">
        {/* Decorative Borders */}
        <div className="absolute top-0 left-[-5px] md:left-0 ">
          <div className="inline-flex relative">
            <div className="relative inline-block z-[4] w-[11px] h-[11px] border-[1px] border-[#FFA200] bg-white rotate-45"></div>
            <div className="absolute z-[4] h-px md:w-[210px] w-[210px] bg-[linear-gradient(4.38deg,#FFA200,#050505)] top-1/2 left-1/2 -translate-y-1/2"></div>
            <div className="absolute z-[4] w-px md:h-[210px] h-[210px] mt-[7px] left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#FFA200] to-[#050505]"></div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 max-md:right-[-5px]">
          <div className="inline-flex relative">
            <div className="relative inline-block z-[4] w-[11px] h-[11px] border-[3px] border-[#FFA200] bg-white rotate-45"></div>
            <div className="absolute z-[4] h-px bg-[linear-gradient(4.38deg,#050505,#FFA200)] right-0 top-1/2 -translate-y-1/2 mr-[7px] md:w-[210px] w-[210px]"></div>
            <div className="absolute bottom-0 left-1/2 translate-x-[-50%] z-[4] w-px md:h-[210px] h-[210px] bg-[linear-gradient(4.38deg,#FFA200,#050505)]"></div>
          </div>
        </div>

        <div className="contract-box">
        
          <img
            src={sol} 
            alt="Solana Contract"
            width="200"
            height="45"
            className="mx-auto mb-6"
          />

          <div className="contract-address">{solanaAddress}</div>

          <button
            onClick={() => copyToClipboard("solana", solanaAddress)}
            className="copy-btn"
          >
            {copied === "solana" ? "Copied!" : "Copy Address"}
          </button>

          {/* Decorative Borders */}
          <span className="border-left"></span>
          <span className="border-right"></span>
          <span className="border-bottom"></span>
        </div>
      </div>

      {/* BEP-20 Contract */}
      <div className="contract-wrapper">
        {/* Decorative Borders */}
        <div className="absolute top-0 left-[-5px] md:left-0 ">
          <div className="inline-flex relative">
            <div className="relative inline-block z-[4] w-[11px] h-[11px] border-[1px] border-[#FFA200] bg-white rotate-45"></div>
            <div className="absolute z-[4] h-px md:w-[210px] w-[210px] bg-[linear-gradient(4.38deg,#FFA200,#050505)] top-1/2 left-1/2 -translate-y-1/2"></div>
            <div className="absolute z-[4] w-px md:h-[210px] h-[210px] mt-[7px] left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#FFA200] to-[#050505]"></div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 max-md:right-[-5px]">
          <div className="inline-flex relative">
            <div className="relative inline-block z-[4] w-[11px] h-[11px] border-[3px] border-[#FFA200] bg-white rotate-45"></div>
            <div className="absolute z-[4] h-px bg-[linear-gradient(4.38deg,#050505,#FFA200)] right-0 top-1/2 -translate-y-1/2 mr-[7px] md:w-[210px] w-[210px]"></div>
            <div className="absolute bottom-0 left-1/2 translate-x-[-50%] z-[4] w-px md:h-[210px] h-[210px] bg-[linear-gradient(4.38deg,#FFA200,#050505)]"></div>
          </div>
        </div>

        <div className="contract-box">
       
          <img
            src={bsc} 
            alt="BSC Contract"
            width="200"
            height="45"
            className="mx-auto mb-6 "
          />

          <div className="contract-address">{bep20Address}</div>

          <button
            onClick={() => copyToClipboard("bep20", bep20Address)}
            className="copy-btn"
          >
            {copied === "bep20" ? "Copied!" : "Copy Address"}
          </button>

          {/* Decorative Borders */}
          <span className="border-left"></span>
          <span className="border-right"></span>
          <span className="border-bottom"></span>
        </div>
      </div>
    </section>
  );
};

export default ContractAddress;
