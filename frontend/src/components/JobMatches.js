import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles/job-matches.css";

const JobMatches = () => {
  const { resumeId } = useParams();
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch(`/api/matches/${resumeId}`) // API call to get matches
      .then((response) => response.json())
      .then((data) => setMatches(data))
      .catch((error) => console.error("Error fetching matches:", error));
  }, [resumeId]);

  return (
    <div className="job-matches">
      <h2>Matching Jobs</h2>
      {matches.length > 0 ? (
        matches.map((job) => (
          <div key={job.id} className="match-card">
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.description}</p>
          </div>
        ))
      ) : (
        <p>No matches found.</p>
      )}
    </div>
  );
};

export default JobMatches;
