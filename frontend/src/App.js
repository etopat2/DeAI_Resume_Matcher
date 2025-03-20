import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import JobList from "./JobList";
import ResumeUploader from "./ResumeUploader";
import JobMatches from "./JobMatches";
import EmployerDashboard from "./EmployerDashboard";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<ResumeUploader />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/matches/:resumeId" element={<JobMatches />} />
        <Route path="/employer" element={<EmployerDashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
