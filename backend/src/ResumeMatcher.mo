import ResumeStorage "./ResumeStorage";
import JobMatcher "./JobMatcher";

actor ResumeMatcher {
    public type Resume = {
        id: Nat;
        name: Text;
        skills: [Text];
    };

    public type Job = {
        id: Nat;
        title: Text;
        requiredSkills: [Text];
    };

    stable var resumes: [Resume] = [];
    stable var jobs: [Job] = [];
    stable var resumeId: Nat = 0;
    stable var jobId: Nat = 0;

    // Function to add a resume
    public func addResume(name: Text, skills: [Text]) : async Nat {
        let id = resumeId;
        resumes := Array.append(resumes, [{ id = id; name = name; skills = skills }]);
        resumeId += 1;
        ResumeStorage.storeResume(id, name, skills);
        return id;
    };

    // Function to add a job
    public func addJob(title: Text, requiredSkills: [Text]) : async Nat {
        let id = jobId;
        jobs := Array.append(jobs, [{ id = id; title = title; requiredSkills = requiredSkills }]);
        jobId += 1;
        ResumeStorage.storeJob(id, title, requiredSkills);
        return id;
    };

    // Fetch stored resumes
    public query func getResumes() : async [Resume] {
        return resumes;
    };

    // Fetch stored jobs
    public query func getJobs() : async [Job] {
        return jobs;
    };

    // Match a resume to jobs using AI-based ranking
    public func matchResumeToJobs(resumeId: Nat) : async [(Job, Float)] {
        return await JobMatcher.matchJobs(resumeId);
    };
};
