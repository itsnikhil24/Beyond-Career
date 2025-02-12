import React from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CareerRoadmap from "./pages/CareerRoadmap";
import Mentorship from "./pages/Mentorship";
import JobPortal from "./pages/JobPortal";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      
      <Sidebar />
      <div className="main-content" >
      <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/career-roadmap" element={<CareerRoadmap />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/job-portal" element={<JobPortal />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
