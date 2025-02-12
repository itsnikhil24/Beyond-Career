// src/pages/Mentorship.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Mentorship.css";

const Mentorship = () => {
  const navigate = useNavigate();

  // Dummy Mentor Recommendations Data
  const mentorRecommendations = [
    {
      name: "John Doe",
      expertise: "Full Stack Development",
      bio: "Expert in MERN stack with 5+ years of experience.",
    },
    {
      name: "Jane Smith",
      expertise: "UI/UX Design",
      bio: "Creative designer specialized in user experience and branding.",
    },
    {
      name: "Alex Johnson",
      expertise: "Data Science",
      bio: "Data enthusiast with a passion for machine learning and AI.",
    },
  ];

  const handleBrowseMentors = () => {
    navigate("/mentorship/details");
  };

  return (
    <div className="mentorship-page">
      <h1>Find a Mentor</h1>
      <div className="mentor-cards">
        {mentorRecommendations.map((mentor, index) => (
          <div key={index} className="mentor-card">
            <h3>{mentor.name}</h3>
            <p>Expertise: {mentor.expertise}</p>
            <p>{mentor.bio}</p>
          </div>
        ))}
      </div>
      <button className="cta-button" onClick={handleBrowseMentors}>
        Browse Mentors
      </button>
    </div>
  );
};

export default Mentorship;
