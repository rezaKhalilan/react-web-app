import React from "react";
import "./LightCard.css";

const LightCard = ({ children }) => {
  return (
    <div className="light-container">
      <div className="container-in-card">{children}</div>
    </div>
  );
};

export default LightCard;
