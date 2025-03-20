import React, { useEffect, useState } from "react";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/jobs") // Replace with actual backend API
      .then((response) => {
        setJobs(response.data.jobs);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Available Jobs</h2>
      <ul className="bg-white shadow-lg rounded-lg p-4">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <li key={job.id} className="border-b py-2">
              <h3 className="font-semibold">{job.title}</h3>
              <p>{job.description}</p>
            </li>
          ))
        ) : (
          <p>No jobs available</p>
        )}
      </ul>
    </div>
  );
};

export default JobList;
