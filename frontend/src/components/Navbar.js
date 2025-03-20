import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">DeAI Resume Matcher</h1>
        <div>
          <Link to="/" className="text-white px-4">Home</Link>
          <Link to="/upload" className="text-white px-4">Upload Resume</Link>
          <Link to="/jobs" className="text-white px-4">Job Listings</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
