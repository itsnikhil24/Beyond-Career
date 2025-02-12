// src/pages/CareerRoadmap.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./CareerRoadmap.css";

const CareerRoadmap = () => {
  const navigate = useNavigate();

  const handleUpdatePath = () => {
    navigate("/career-roadmap/details");
  };

  return (
    <div className="career-roadmap-container">
      <h1>Your Career Roadmap</h1>
      <div className="progress-bar">
        <div className="progress" style={{ width: "50%" }}></div>
      </div>
      <p>50% of your roadmap completed!</p>
      <button className="cta-button" onClick={handleUpdatePath}>
        Update Your Path
      </button>
    </div>
  );
};

export default CareerRoadmap;
