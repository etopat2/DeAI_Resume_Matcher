from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from .inference import predict_job_category

router = APIRouter()

class ResumeInput(BaseModel):
    resume_text: str

class PredictionOutput(BaseModel):
    job_category: str

@router.post("/predict", response_model=PredictionOutput)
def predict_resume_job_category(input: ResumeInput):
    """
    Endpoint to predict the most suitable job category for a resume.

    Request Body:
    {
        "resume_text": "Experienced backend developer with Python, Django, and PostgreSQL."
    }

    Response:
    {
        "job_category": "Backend Developer"
    }
    """
    try:
        predicted_job = predict_job_category(input.resume_text)
        return {"job_category": predicted_job}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction failed: {e}")
