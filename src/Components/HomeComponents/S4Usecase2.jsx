import ScrollStack, { ScrollStackItem } from '../ScrollStack2';
import cryptoImg1 from "../../assets/usecase/use1.png";
import cryptoImg2 from "../../assets/usecase/use2.png";
import cryptoImg3 from "../../assets/usecase/use3.png";
import cryptoImg4 from "../../assets/usecase/use4.png";
import cryptoImg5 from "../../assets/usecase/use5.png";
import cryptoImg6 from "../../assets/usecase/use6.png";
import cryptoImg7 from "../../assets/usecase/use7.png";
import cryptoImg8 from "../../assets/usecase/use8.png";
import cryptoImg9 from "../../assets/usecase/use9.png";
import cryptoImg10 from "../../assets/usecase/use10.png";
import '../../Styles/S4Usecase2.css';

function S4Usecase() {
  return (
    <div id='usecase'>
      <h2 className="bg-transparent border border-white/25 text-white px-5 py-2 rounded-full font-[400] text-[20px] 
        leading-[110%] text-center cursor-pointer transition duration-300 max-w-fit mx-auto mb-[30px] font-['Open_Sans',sans-serif]">
        Use Cases
      </h2>
      <ScrollStack>
        <ScrollStackItem itemClassName="crypto-card">
          <div className="crypto-card-container">
            <div className="crypto-text">
              <h3 className="font-[600] sm:text-[24px] text-[30px] leading-[120%] mb-4 head-text-use font-sans">
                AI Chatbot <span className="sm:text-[16px] text-[20px]">(Crypto + General Assistance)</span>:
              </h3>
              <p className="font-sans font-normal text-[18px] leading-[130%] text-white">
                The AI Chatbot serves as a smart assistant designed to simplify both crypto-related and general queries. It provides real-time responses, helping users with market insights, portfolio updates, and day-to-day assistance, ensuring a smooth and interactive experience.
              </p>
            </div>
            <div className="crypto-image">
              <img src={cryptoImg1} alt="AI Crypto Chatbot Illustration" loading="lazy" />
            </div>
          </div>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="crypto-card">
          <div className="crypto-card-container">
            <div className="crypto-text">
              <h3 className="font-[600] sm:text-[24px] text-[30px] leading-[120%] mb-4 head-text-use font-sans">
                AI Crypto Portfolio Management:
              </h3>
              <p className="font-sans font-normal text-[18px] leading-[130%] text-white">
                AI Crypto Portfolio Management helps users track, analyze, and optimize their digital assets with ease. It provides real-time insights, performance monitoring, and risk analysis to support smarter investment decisions.
              </p>
            </div>
            <div className="crypto-image">
              <img src={cryptoImg2} alt="AI Crypto Portfolio Management Illustration" loading="lazy" />
            </div>
          </div>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="crypto-card">
          <div className="crypto-card-container">
            <div className="crypto-text">
              <h3 className="font-[600] sm:text-[24px] text-[30px] leading-[120%] mb-4 head-text-use font-sans">
                AI Trading Signal Assistant + Automated Trading Bots <span className="sm:text-[16px] text-[20px]">(DeFi + CEX)</span>:
              </h3>
              <p className="font-sans font-normal text-[18px] leading-[130%] text-white">
                The AI Trading Signal Assistant delivers accurate, real-time signals to help users make informed trading decisions across both DeFi and centralized exchanges.
              </p>
            </div>
            <div className="crypto-image">
              <img src={cryptoImg3} alt="AI Trading Signal Assistant Illustration" loading="lazy" />
            </div>
          </div>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="crypto-card">
          <div className="crypto-card-container">
            <div className="crypto-text">
              <h3 className="font-[600] sm:text-[24px] text-[30px] leading-[120%] mb-4 head-text-use font-sans">
                Crypto Card for Global Payments <span className="sm:text-[16px] text-[20px]">(Fiat + Crypto)</span>:
              </h3>
              <p className="font-sans font-normal text-[18px] leading-[130%] text-white">
                The Crypto Card enables seamless global payments by supporting both fiat and cryptocurrency transactions. It offers users the flexibility to spend digital assets anywhere while ensuring fast and secure processing.
              </p>
            </div>
            <div className="crypto-image">
              <img src={cryptoImg4} alt="Crypto Card Illustration" loading="lazy" />
            </div>
          </div>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="crypto-card">
          <div className="crypto-card-container">
            <div className="crypto-text">
              <h3 className="font-[600] sm:text-[24px] text-[30px] leading-[120%] mb-4 head-text-use font-sans">
                Telegram AI Bot <span className="sm:text-[16px] text-[20px]">(Community + Support)</span>:
              </h3>
              <p className="font-sans font-normal text-[18px] leading-[130%] text-white">
                The Telegram AI Bot enhances community engagement by providing instant support and automated assistance. It helps answer queries, share updates, and guide users within the platform, ensuring a smooth experience.
              </p>
            </div>
            <div className="crypto-image">
              <img src={cryptoImg5} alt="Telegram AI Bot Illustration" loading="lazy" />
            </div>
          </div>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="crypto-card">
          <div className="crypto-card-container">
            <div className="crypto-text">
              <h3 className="font-[600] sm:text-[24px] text-[30px] leading-[120%] mb-4 head-text-use font-sans">
                Multi-Language Global Chatbot <span className="sm:text-[16px] text-[20px]">(Breaking Barriers)</span>:
              </h3>
              <p className="font-sans font-normal text-[18px] leading-[130%] text-white">
                The Multi-Language Global Chatbot breaks communication barriers by supporting conversations in multiple languages. It enables seamless interaction for users worldwide, fostering inclusivity in the crypto and AI space.
              </p>
            </div>
            <div className="crypto-image">
              <img src={cryptoImg6} alt="Multi-Language Chatbot Illustration" loading="lazy" />
            </div>
          </div>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="crypto-card">
          <div className="crypto-card-container">
            <div className="crypto-text">
              <h3 className="font-[600] sm:text-[24px] text-[30px] leading-[120%] mb-4 head-text-use font-sans">
                Move-to-Earn + Chat-to-Earn Models:
              </h3>
              <p className="font-sans font-normal text-[18px] leading-[130%] text-white">
                The Move-to-Earn and Chat-to-Earn models reward users for staying active and engaged in both physical and digital spaces. By combining fitness, interaction, and blockchain rewards, they create new earning opportunities.
              </p>
            </div>
            <div className="crypto-image">
              <img src={cryptoImg7} alt="Move-to-Earn Illustration" loading="lazy" />
            </div>
          </div>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="crypto-card">
          <div className="crypto-card-container">
            <div className="crypto-text">
              <h3 className="font-[600] sm:text-[24px] text-[30px] leading-[120%] mb-4 head-text-use font-sans">
                AI-Based Scams & Fraud Detection in Crypto:
              </h3>
              <p className="font-sans font-normal text-[18px] leading-[130%] text-white">
                AI-based scam and fraud detection enhances security by identifying suspicious activities in real time. It protects users from phishing, rug pulls, and other malicious schemes within the crypto space.
              </p>
            </div>
            <div className="crypto-image">
              <img src={cryptoImg8} alt="AI Fraud Detection Illustration" loading="lazy" />
            </div>
          </div>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="crypto-card">
          <div className="crypto-card-container">
            <div className="crypto-text">
              <h3 className="font-[600] sm:text-[24px] text-[30px] leading-[120%] mb-4 head-text-use font-sans">
                AI Identity & KYC Verification:
              </h3>
              <p className="font-sans font-normal text-[18px] leading-[130%] text-white">
                AI Identity and KYC Verification streamline the onboarding process with fast and secure authentication. It ensures compliance by accurately verifying user identities while reducing manual errors.
              </p>
            </div>
            <div className="crypto-image">
              <img src={cryptoImg9} alt="AI KYC Verification Illustration" loading="lazy" />
            </div>
          </div>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="crypto-card">
          <div className="crypto-card-container">
            <div className="crypto-text">
              <h3 className="font-[600] sm:text-[24px] lg:text-[30px] leading-[120%] mb-4 head-text-use font-sans">
                Decentralized Knowledge Hub <span className="sm:text-[16px] text-[20px]">(AI + Blockchain Verified Data)</span>:
              </h3>
              <p className="font-sans font-normal text-[18px] leading-[130%] text-white">
                The Decentralized Knowledge Hub combines AI with blockchain to provide verified and trustworthy information. It eliminates misinformation by ensuring all data is securely validated on the blockchain.
              </p>
            </div>
            <div className="crypto-image">
              <img src={cryptoImg10} alt="Decentralized Knowledge Hub Illustration" loading="lazy" />
            </div>
          </div>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  );
}

export default S4Usecase;