import React, { useState } from "react";
import "../../Styles/ContractAddress.css";

const ContractAddress = () => {
  const [copied, setCopied] = useState(false);

  const address = "DXPBSDFBfCBscTWAqZdqVp78vprtmmMCwBaZMSoPzNBi";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contractaddress" className="contract-section">
      {/* Title */}
      <h2 className="contract-title">Contract Address</h2>

      <div className="contract-wrapper">
        {/* Outer glowing border with corners */}
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
        <div className="contract-box">
          {/* Address Box */}
          <div className="contract-address">{address}</div>

          {/* Copy Button */}
          <button onClick={copyToClipboard} className="copy-btn">
            {copied ? "Copied!" : "Copy Address"}
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
