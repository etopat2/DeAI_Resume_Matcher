from fastapi import FastAPI
from pydantic import BaseModel
from ai_matching import match_resumes_to_jobs

app = FastAPI()

class ResumeRequest(BaseModel):
    resumes: list  # [{"id": 1, "text": "Resume text"}]
    jobs: list     # [{"id": 1, "title": "Job Title", "description": "Job Description"}]

@app.post("/match")
async def match_resumes(request: ResumeRequest):
    """
    API endpoint to match resumes with job descriptions.
    Expects a JSON payload with resumes and jobs.
    """
    results = match_resumes_to_jobs(request.resumes, request.jobs)
    return {"matches": results}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
