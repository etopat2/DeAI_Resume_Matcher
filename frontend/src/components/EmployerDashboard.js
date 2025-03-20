import React, { useState } from "react";
import "./styles/employer-dashboard.css";

const EmployerDashboard = () => {
  const [job, setJob] = useState({ title: "", company: "", description: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Job posted:", job);
    alert("Job posted successfully!");
  };

  return (
    <div className="employer-dashboard">
      <h2>Post a Job</h2>
      <form className="job-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Job Title"
          value={job.title}
          onChange={(e) => setJob({ ...job, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Company Name"
          value={job.company}
          onChange={(e) => setJob({ ...job, company: e.target.value })}
          required
        />
        <textarea
          placeholder="Job Description"
          value={job.description}
          onChange={(e) => setJob({ ...job, description: e.target.value })}
          required
        />
        <button className="post-btn" type="submit">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default EmployerDashboard;
