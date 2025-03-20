import ResumeMatcher "./ResumeMatcher";
import ResumeStorage "./ResumeStorage";
import JobMatcher "./JobMatcher";

actor Main {
    public type Resume = ResumeMatcher.Resume;
    public type Job = ResumeMatcher.Job;

    // Expose addResume function
    public func addResume(name: Text, skills: [Text]) : async Nat {
        return await ResumeMatcher.addResume(name, skills);
    };

    // Expose addJob function
    public func addJob(title: Text, requiredSkills: [Text]) : async Nat {
        return await ResumeMatcher.addJob(title, requiredSkills);
    };

    // Retrieve resumes
    public query func getResumes() : async [Resume] {
        return await ResumeMatcher.getResumes();
    };

    // Retrieve jobs
    public query func getJobs() : async [Job] {
        return await ResumeMatcher.getJobs();
    };

    // Match resume to jobs
    public func matchResumeToJobs(resumeId: Nat) : async [(Job, Float)] {
        return await ResumeMatcher.matchResumeToJobs(resumeId);
    };
};
