import ResumeStorage "./ResumeStorage";

actor JobMatcher {
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

    // Match jobs for a given resume
    public func matchJobs(resumeId: Nat) : async [(Job, Float)] {
        let resumes = await ResumeStorage.getStoredResumes();
        let jobs = await ResumeStorage.getStoredJobs();

        var matchedJobs: [(Job, Float)] = [];

        for ((_, resume) in resumes) {
            if (resume.id == resumeId) {
                for ((_, job) in jobs) {
                    let matchScore = calculateMatchScore(resume.skills, job.requiredSkills);
                    if (matchScore > 0.5) { // Threshold to consider a match
                        matchedJobs := Array.append(matchedJobs, [(job, matchScore)]);
                    };
                };
            };
        };

        return matchedJobs;
    };

    // Calculates a basic match score based on shared skills
    private func calculateMatchScore(resumeSkills: [Text], jobSkills: [Text]) : Float {
        let totalSkills = jobSkills.size();
        if (totalSkills == 0) return 0.0;

        var matchedCount: Float = 0.0;
        for (skill in resumeSkills) {
            if (Array.find<Text>(jobSkills, func(x) { x == skill }) != null) {
                matchedCount += 1.0;
            };
        };

        return matchedCount / Float.fromInt(totalSkills);
    };
};
