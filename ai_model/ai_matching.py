import numpy as np
from model_loader import load_model
from sentence_transformers import util

# Load the AI model
model = load_model()

def embed_text(text):
    """Convert text into an embedding using the AI model."""
    return model.encode(text, convert_to_tensor=True)

def calculate_similarity(resume_text, job_text):
    """Compute cosine similarity between resume and job description embeddings."""
    resume_embedding = embed_text(resume_text)
    job_embedding = embed_text(job_text)
    
    similarity_score = util.pytorch_cos_sim(resume_embedding, job_embedding)
    return similarity_score.item()

def match_resumes_to_jobs(resume_data, job_data, threshold=0.5):
    """
    Matches resumes to job descriptions and returns ranked job recommendations.
    - resume_data: [{"id": 1, "text": "Resume content"}]
    - job_data: [{"id": 1, "title": "Job title", "description": "Job content"}]
    """
    results = []
    
    for resume in resume_data:
        ranked_jobs = []
        for job in job_data:
            score = calculate_similarity(resume["text"], job["description"])
            if score >= threshold:
                ranked_jobs.append((job["id"], job["title"], score))
        
        ranked_jobs.sort(key=lambda x: x[2], reverse=True)  # Sort by highest match
        results.append({"resume_id": resume["id"], "matches": ranked_jobs})
    
    return results
