import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import coingecko from "../../assets/partners/partners/1.png";
import phantom from "../../assets/partners/partners/2.png";
import solscan from "../../assets/partners/partners/3.png";
import trustwallet from "../../assets/partners/partners/4.png";
import Coinmarketcap from "../../assets/partners/partners/5.png";
import rydium from "../../assets/partners/partners/6.png";
import img1 from "../../assets/partners/partners/7.png";
import img2 from "../../assets/partners/partners/8.png";
import img3 from "../../assets/partners/partners/9.png";
import img4 from "../../assets/partners/partners/10.png";
import img5 from "../../assets/partners/partners/11.png";
import img6 from "../../assets/partners/partners/12.png";
import img7 from "../../assets/partners/partners/13.png";
import img8 from "../../assets/partners/partners/14.png";
import img9 from "../../assets/partners/partners/15.png";
import img10 from "../../assets/partners/partners/16.png";
import img11 from "../../assets/partners/partners/17.png";
import img12 from "../../assets/partners/partners/18.png";
import img13 from "../../assets/partners/partners/19.png";
import img14 from "../../assets/partners/partners/20.png";
import img15 from "../../assets/partners/partners/21.png";
import img16 from "../../assets/partners/partners/22.png";
import img17 from "../../assets/partners/partners/23.png";
import img18 from "../../assets/partners/partners/24.png";

const partners = [coingecko, phantom, solscan, trustwallet, Coinmarketcap, rydium, img1, img2, img3 ,img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18];

const partnersSection = () => {
  return (
    <section id="partners" className="bg-black text-white  py-10 ">
      {/* Title */}
      <div  className="text-center mb-16">
        <span className="bg-transparent border border-white/25 text-white px-5 py-2 rounded-full font-[400] text-[20px] 
        leading-[110%] text-center cursor-pointer transition duration-300 max-w-fit mx-auto  font-['Open_Sans',sans-serif]">
          Strategic Partner&apos;s
        </span>
      </div>

      {/* Slider */}
      <div className="max-w-9xl mx-auto px-6">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0, // no delay between slides
            disableOnInteraction: false,
          }}
          speed={3000} 
          loop={true}
          spaceBetween={40}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {partners.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex items-center justify-center p-4">
                {/* Top-left corner */}
                <span className="absolute top-0 left-0 w-8 h-[1px] bg-gradient-to-r from-yellow-500 to-transparent"></span>
                <span className="absolute top-0 left-0 h-8 w-[1px] bg-gradient-to-b from-yellow-500 to-transparent"></span>

                {/* Bottom-right corner */}
                <span className="absolute bottom-0 right-0 w-8 h-[1px] bg-gradient-to-l from-yellow-500 to-transparent"></span>
                <span className="absolute bottom-0 right-0 h-8 w-[1px] bg-gradient-to-t from-yellow-500 to-transparent"></span>

                {/* Logo */}
                <img
                  src={logo}
                  alt="partner"
                  className="max-w-[1890px] object-contain mx-4"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default partnersSection;
