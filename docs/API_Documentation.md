# 📌 API Documentation - DeAI Resume Maker

## 🚀 Base URL
http://127.0.0.1:8000/

## 📌 Endpoints

### **1️⃣ Upload Resume**
**Endpoint:** `POST /upload_resume`  
**Description:** Uploads a resume and stores it in ICP.  
**Request Body (JSON):**
```json
{
  "user_id": "12345",
  "resume_file": "<file>"
}
Response:
{
  "message": "Resume uploaded successfully",
  "resume_id": "abc123"
}
2️⃣ Get Job Matches
Endpoint: GET /matches/{resume_id}
Description: Retrieves AI-matched job recommendations.
Response:
{
  "matches": [
    {"id": "job123", "title": "Software Engineer", "score": 0.92},
    {"id": "job456", "title": "Data Scientist", "score": 0.88}
  ]
}
3️⃣ Employer: Post a Job
Endpoint: POST /jobs
Request Body:
{
  "title": "Software Engineer",
  "description": "Full-stack role with React & Python",
  "company": "Tech Corp"
}
Response:
{
  "message": "Job posted successfully",
  "job_id": "job123"
}
4️⃣ Get Job Listings
Endpoint: GET /jobs
Response:

{
  "jobs": [
    {"id": "job123", "title": "Software Engineer", "company": "Tech Corp"},
    {"id": "job456", "title": "AI Researcher", "company": "AI Labs"}
  ]
}
📌 Authentication (Upcoming Feature)
Login & Register APIs will be added in the next update.


---

Let me know if you need any modifications! 🚀