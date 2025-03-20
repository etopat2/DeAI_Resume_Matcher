import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to DeAI Resume Matcher</h1>
      <p className="text-lg mb-4">AI-powered job matching using blockchain.</p>
      <div className="space-x-4">
        <Link to="/upload" className="bg-blue-600 text-white px-4 py-2 rounded">
          Upload Resume
        </Link>
        <Link to="/jobs" className="bg-green-600 text-white px-4 py-2 rounded">
          View Jobs
        </Link>
        <Link to="/employer" className="bg-gray-700 text-white px-4 py-2 rounded">
          Employer Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;
