import React from "react";
import "./DarkCard.css";

const DarkCard = ({ children }) => {
  return (
    <div className="dark-container">
      <div className="container-in-card">{children}</div>
    </div>
  );
};

export default DarkCard;
