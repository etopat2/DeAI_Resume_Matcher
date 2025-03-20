import React from "react";
import { Link } from "react-router-dom";
import "./styles/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to DeAI Resume Matcher</h1>
      <p>Find the perfect job based on your resume using AI!</p>
      <Link to="/upload" className="cta-button">Upload Resume</Link>
    </div>
  );
};

export default Home;
