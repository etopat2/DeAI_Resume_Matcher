import React, { useState } from "react";
import axios from "axios";

const ResumeUploader = () => {
  const [resumeText, setResumeText] = useState("");
  const [matches, setMatches] = useState([]);

  const handleUpload = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/match", {
        resumes: [{ id: 1, text: resumeText }],
        jobs: [] // Backend should auto-fetch jobs
      });

      setMatches(response.data.matches);
    } catch (error) {
      console.error("Error matching resume:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Upload Your Resume</h2>
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Paste your resume here..."
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
        rows="6"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 mt-2 rounded"
      >
        Find Matching Jobs
      </button>

      <h3 className="mt-4 text-lg font-semibold">Job Matches</h3>
      <ul>
        {matches.length > 0 ? (
          matches.map((match, index) => (
            <li key={index} className="border-b py-2">
              <strong>{match.title}</strong> - Score: {match.score.toFixed(2)}
            </li>
          ))
        ) : (
          <p>No matches found</p>
        )}
      </ul>
    </div>
  );
};

export default ResumeUploader;
