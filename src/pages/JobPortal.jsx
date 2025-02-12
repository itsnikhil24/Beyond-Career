// src/pages/JobPortal.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./JobPortal.css";

const JobPortal = () => {
  const navigate = useNavigate();

  // Dummy Job Listings Data
  const jobListings = [
    {
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      type: "Full-Time",
    },
    {
      title: "Backend Developer",
      company: "Innovate Tech",
      location: "San Francisco, CA",
      type: "Part-Time",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Minds Ltd.",
      location: "New York, NY",
      type: "Contract",
    },
  ];

  const handleViewMore = () => {
    navigate("/job-portal/details");
  };

  return (
    <div className="job-portal">
      <h1>Explore Job Opportunities</h1>
      <div className="job-cards">
        {jobListings.map((job, index) => (
          <div key={index} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <span className="job-type">{job.type}</span>
          </div>
        ))}
      </div>
      <button className="cta-button" onClick={handleViewMore}>
        View More Jobs
      </button>
    </div>
  );
};

export default JobPortal;
