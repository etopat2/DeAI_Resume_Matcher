import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployerDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/jobs")
      .then((response) => {
        setJobs(response.data.jobs);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  const handlePostJob = () => {
    axios.post("http://127.0.0.1:8000/jobs", {
      title: jobTitle,
      description: jobDescription
    })
    .then((response) => {
      setJobs([...jobs, response.data]);
      setJobTitle("");
      setJobDescription("");
    })
    .catch((error) => {
      console.error("Error posting job:", error);
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Employer Dashboard</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">Post a Job</h3>
        <input
          type="text"
          placeholder="Job Title"
          className="w-full p-2 border rounded mb-2"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <textarea
          placeholder="Job Description"
          className="w-full p-2 border rounded mb-2"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
        <button
          onClick={handlePostJob}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Post Job
        </button>
      </div>

      <h3 className="text-lg font-semibold">Posted Jobs</h3>
      <ul className="bg-white shadow-lg rounded-lg p-4">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <li key={job.id} className="border-b py-2">
              <h3 className="font-semibold">{job.title}</h3>
              <p>{job.description}</p>
            </li>
          ))
        ) : (
          <p>No jobs posted</p>
        )}
      </ul>
    </div>
  );
};

export default EmployerDashboard;
