import React from "react";
import "../Styles/S4Usecase2.css";

export const ScrollStackItem = ({ children, index }) => {
  return (
    <div
      className="scroll-stack-card"
      style={{ zIndex: index + 1 }}
    >
      {children}
    </div>
  );
};

const ScrollStack = ({ children }) => {
  return (
    <div className="scroll-stack-wrapper">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { index })
      )}
    </div>
  );
};

export default ScrollStack;
