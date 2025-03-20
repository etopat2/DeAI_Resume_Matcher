from fastapi import FastAPI
from ai import ai_matching

app = FastAPI(
    title="DeAI Resume Maker API",
    description="Backend API for resume-job matching using AI",
    version="1.0"
)

# Include AI matching routes
app.include_router(ai_matching.router, prefix="/api", tags=["AI Matching"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the DeAI Resume Maker API!"}
