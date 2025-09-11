import React from "react";
import telegramLogo from "../assets/partners/telgram2.png";

const FloatingTelegram = () => {
  return (
    <a
      href="https://t.me/crypgpttoken"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 left-6 z-50"
    >
      <div
        className="telegram-btn w-16 h-16 rounded-full flex items-center justify-center 
                   shadow-lg hover:scale-110 transition-transform duration-300 relative"
      >
        <img
          src={telegramLogo}
          alt="Telegram"
          className="w-10 h-10 object-contain relative z-10"
        />
        {/* Glow Ring */}
        <span className="telegram-glow absolute inset-0 rounded-full"></span>
      </div>
    </a>
  );
};

export default FloatingTelegram;
