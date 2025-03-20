import pickle
import os

# Load trained model
model_path = os.path.join(os.path.dirname(__file__), "trained_model.pkl")

print("🔍 Loading trained model for inference...")

with open(model_path, 'rb') as file:
    model = pickle.load(file)

print("✅ Model loaded successfully!")

def predict_job_category(resume_text: str) -> str:
    """
    Predicts the most suitable job category for the provided resume text.
    
    Args:
        resume_text (str): Raw resume text.
    
    Returns:
        str: Predicted job label (e.g., 'Software Engineer', 'ML Engineer')
    """
    prediction = model.predict([resume_text])
    return prediction[0]
