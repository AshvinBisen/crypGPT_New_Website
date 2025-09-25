import { useState } from 'react'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import S1Hero from '../Components/HomeComponents/S1Hero'; 
import S2HeroImage from '../Components/HomeComponents/S2HeroImage';
import S3Aboutus from '../Components/HomeComponents/S3Aboutus';
import S4Usecase2 from '../Components/HomeComponents/S4Usecase2';
import S5Banner from '../Components/HomeComponents/S5Banner'
import S6Roadmap from '../Components/HomeComponents/S6Roadmap'
import S7Tokenomics from '../Components/HomeComponents/S7Tokenomics';
import S8WhyChooseUS from '../Components/HomeComponents/S8WhyChooseUs'
import S9Solution from '../Components/HomeComponents/S9Solution'
import S10StrategicPartner from '../Components/HomeComponents/S10StrategicPartner'
import S11Contract from '../Components/HomeComponents/S11Contract'
import S12Faqs from '../Components/HomeComponents/S12Faqs'




function HomePage() {

   const location1 = useLocation();
  useEffect(() => {
    const scrollToElement = () => {
      const { search } = location1;
      const params = new URLSearchParams(search);
      const scrollToId = params.get('');

      if (scrollToId) {
        const element = document.getElementById(scrollToId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    scrollToElement();
  }, [location1]);

  return (
    <>
      <S1Hero />
      <S2HeroImage />
      <S3Aboutus />
      <S4Usecase2 />
       <S5Banner />
      <S6Roadmap />
      <S7Tokenomics />
      <S8WhyChooseUS />
      <S9Solution />
      <S10StrategicPartner />
      <S11Contract />
      <S12Faqs />
    </>
  )
}

export default HomePage;
