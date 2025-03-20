import sys
import os
import pytest
from fastapi.testclient import TestClient

# Ensure backend directory is in sys.path
sys.path.append(os.path.dirname(os.path.dirname(__file__)))

from main import app

client = TestClient(app)

@pytest.fixture(scope="module")
def test_client():
    return client

def test_predict_success(test_client):
    # Valid test payload
    payload = {
        "resume_text": "Experienced Python backend developer with Django and PostgreSQL."
    }
    response = test_client.post("/api/predict", json=payload)
    
    assert response.status_code == 200
    assert "job_category" in response.json()
    assert isinstance(response.json()["job_category"], str)
    print(f"✅ Success test output: {response.json()}")

def test_predict_failure(test_client):
    # Invalid payload (missing resume_text)
    payload = {}
    response = test_client.post("/api/predict", json=payload)
    
    assert response.status_code == 422  # FastAPI raises 422 for validation errors
    print("✅ Validation error test passed")

def test_predict_empty_resume(test_client):
    # Edge case with empty resume text
    payload = {
        "resume_text": ""
    }
    response = test_client.post("/api/predict", json=payload)
    
    assert response.status_code == 200
    assert "job_category" in response.json()
    print(f"⚠️ Empty resume text test output: {response.json()}")

