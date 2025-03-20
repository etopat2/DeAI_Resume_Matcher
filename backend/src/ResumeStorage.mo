actor ResumeStorage {
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

    stable var resumeDB : [(Nat, Resume)] = [];
    stable var jobDB : [(Nat, Job)] = [];

    // Store a resume
    public func storeResume(id: Nat, name: Text, skills: [Text]) {
        resumeDB := Array.append(resumeDB, [(id, { id = id; name = name; skills = skills })]);
    };

    // Store a job
    public func storeJob(id: Nat, title: Text, requiredSkills: [Text]) {
        jobDB := Array.append(jobDB, [(id, { id = id; title = title; requiredSkills = requiredSkills })]);
    };

    // Retrieve resumes
    public query func getStoredResumes() : async [(Nat, Resume)] {
        return resumeDB;
    };

    // Retrieve jobs
    public query func getStoredJobs() : async [(Nat, Job)] {
        return jobDB;
    };
};
