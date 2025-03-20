import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const JobMatches = () => {
  const { resumeId } = useParams(); // Get resume ID from URL params
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/matches/${resumeId}`)
      .then((response) => {
        setMatches(response.data.matches);
      })
      .catch((error) => {
        console.error("Error fetching matches:", error);
      });
  }, [resumeId]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Job Matches</h2>
      <ul className="bg-white shadow-lg rounded-lg p-4">
        {matches.length > 0 ? (
          matches.map((match) => (
            <li key={match.id} className="border-b py-2">
              <h3 className="font-semibold">{match.title}</h3>
              <p>Match Score: {match.score.toFixed(2)}</p>
            </li>
          ))
        ) : (
          <p>No matches found</p>
        )}
      </ul>
    </div>
  );
};

export default JobMatches;
