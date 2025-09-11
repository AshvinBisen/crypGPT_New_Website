import React from "react";
import "../Styles/Footer.css";
import logo from "../assets/logo.png";       
import roboHand from "../assets/footer/ro-hand.png"; 
import auditLogo from "../assets/footer/solidproof.png"; 

import { Link } from 'react-router-dom';

// Social Media Icons
import facebookIcon from "../assets/footer/ri_facebook-fill.png";
import youtueIcon from "../assets/footer/mdi_youtube.png";
import twitterIcon from "../assets/footer/prime_twitter.png";
import instagramIcon from "../assets/footer/ri_instagram-line.png";
import telegramIcon from "../assets/footer/meteor-icons_telegram.png";
import mediumIcon from "../assets/footer/medium_i.png";

const Footer = () => {
  return (
    <footer className="footer-section overflow-hidden">
           <div className="absolute top-[-10px] left-[-5px] md:left-0 ">
                <div className="inline-flex relative">
                    <div className="relative inline-block z-[4] w-[11px] h-[11px] border-[1px] border-[#FFA200] bg-white rotate-45 max-md:w-[10px] max-md:h-[10px] max-md:border-2"></div>
                    <div className="absolute z-[4] h-px sm:w-[70px] md:w-[210px] w-[210px] bg-[linear-gradient(4.38deg,#FFA200,#050505)] top-1/2 left-1/2 -translate-y-1/2  xl:w-[250px] 2xl:w-[290px]"></div>
                    <div className="absolute z-[4] w-px sm:h-[70px] h-[210px] md:h-[210px] mt-[7px] inset-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#FFA200] to-[#050505 ] sm:h-[70px] xl:h-[100px] 2xl:h-[125px]"></div>
                </div>
            </div>
            <div className="absolute bottom-[-10px] right-[-5px] max-md:right-[5px]">
                <div className="inline-flex relative">
                    <div className="relative inline-block z-[4] w-[11px] h-[11px] border-[3px] border-[#FFA200] bg-white rotate-45 max-md:w-[10px] max-md:h-[10px] max-md:border-2"></div>
                    <div className="absolute z-[4] h-px bg-[linear-gradient(4.38deg,#050505,#FFA200)] right-0 top-1/2 -translate-y-1/2 mr-[7px]  sm:w-[70px] md:w-[210px] w-[210px]   xl:w-[250px] 2xl:w-[290px]"></div>
                    <div className="absolute bottom-0 left-1/2 translate-x-[-50%] z-[4] w-px md:h-[210px] h-[210px] sm:mb-[7px] bg-[linear-gradient(4.38deg,#FFA200,#050505)] sm:h-[70px] xl:h-[250px] 2xl:h-[290px]"></div>
                </div>
            </div>
            <div className="absolute top-[-10px] right-[-5px] md:right-0">
                <div className="inline-flex relative">
                    <div className="relative inline-block z-[4] w-[11px] h-[11px] border-[1px] border-[#FFA200] bg-white rotate-45 max-md:w-[10px] max-md:h-[10px] max-md:border-2"></div>
                    <div className="absolute z-[4] h-px sm:w-[70px] md:w-[210px] w-[210px] bg-[linear-gradient(4.38deg,#050505,#FFA200)] top-1/2 right-1/2 -translate-y-1/2 xl:w-[250px] 2xl:w-[290px]"></div>
                    <div className="absolute z-[4] w-px sm:h-[70px] h-[210px] md:h-[210px] mt-[7px] inset-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#FFA200] to-[#050505] sm:h-[70px] xl:h-[100px] 2xl:h-[125px]"></div>
                </div>
            </div>
            <div className="absolute bottom-[-10px] left-[-5px] max-md:left-[-5px]">
                <div className="inline-flex relative">
                    <div className="relative inline-block z-[4] w-[11px] h-[11px] border-[3px] border-[#FFA200] bg-white rotate-45 max-md:w-[10px] max-md:h-[10px] max-md:border-2"></div>
                    <div className="absolute z-[4] h-px bg-[linear-gradient(4.38deg,#FFA200,#050505)] left-0 top-1/2 -translate-y-1/2 ml-[7px] sm:w-[70px] md:w-[210px] w-[210px] xl:w-[250px] 2xl:w-[290px]"></div>
                    <div className="absolute bottom-0 left-1/2 translate-x-[-50%] z-[4] w-px md:h-[210px] h-[210px] sm:mb-[7px] bg-[linear-gradient(4.38deg,#FFA200,#050505)] sm:h-[70px] xl:h-[250px] 2xl:h-[290px]"></div>
                </div>
            </div>



      <div className="footer-top">
        {/* Left Side */}
        <div className="footer-left">
          <img src={logo} alt="CrypGPT Logo" className="footer-logo" />
          <img src={roboHand} alt="Robot Hand" className="footer-hand" />
        </div>

        {/* Middle Links - GRID */}
        {/* <div className="footer-links"> */}
          <div className="footer-column one">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/?=about">About</Link></li>
              <li><Link to="/?=tokenomics">Toknomics</Link></li>
              <li><Link to="/?=roadmap">Roadmap</Link></li>
              <li><Link to="/?=contractaddress">Contract Address</Link></li>
            </ul>
          </div>
          <div className="footer-column two">
            <h4>Utility Pages</h4>
            <ul>
              <li><Link to="https://crypgpts-token.gitbook.io/crypgpts-token/" target="blank">Whitepaper</Link></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
              <li><Link to="/?=faq">FAQ's</Link></li>
            </ul>
          </div>
          <div className="footer-column three">
            <h4>Contact us</h4>
            <p>We're committed to driving your business success with our experienced team.</p>
            <p>Address: 82 New Street, NY 10013</p>
            <p>Phone: +971551872679</p>
          </div>
        {/* </div> */}
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
       <p className="copyright text-right justify-end">Copyright: © <span href="/" target="_blank" rel="noopener noreferrer">CrypGPT</span></p>
        {/* <div></div>
        <div className="foo-co"> */}
          {/* <p className="copyright">Copyright: © CrypGPT</p> */}
          <div className="footer-audit">
            <span>Audited by :</span>
            <a href="https://app.solidproof.io/projects/crypgpt" target="_blank" rel="noopener noreferrer">
              <img src={auditLogo} alt="SolidProof" />
            </a>
          </div>
        {/* </div> */}
        

        <div className="footer-social">
          <span>Follow us on social platform's</span>
          <div className="social-icons">
            <a href="http://facebook.com/crygpttoken" target="_blank"><img src={facebookIcon} alt="Facebook" /></a>
            <a href="https://www.youtube.com/@crypgpt_token" target="_blank"><img src={youtueIcon} alt="YouTube" /></a>
            <a href="https://x.com/crypgpt_token" target="_blank"><img src={twitterIcon} alt="Twitter" /></a>
            <a href="https://www.instagram.com/crypgpt_token" target="_blank"><img src={instagramIcon} alt="Instagram" /></a>
            {/* <a href="https://t.me/crypgpttoken" target="_blank"><img src={telegramIcon} alt="Telegram" /></a> */}
            <a href="https://medium.com/@crypgpt_token" target="_blank"><img src={mediumIcon} alt="medium" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
