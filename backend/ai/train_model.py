import pandas as pd
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline

# Extended training dataset
data = {
    "resume_text": [
        "Experienced software engineer with Python, React, and AWS skills",
        "Data scientist skilled in machine learning, TensorFlow, and Python",
        "Full-stack developer proficient in Node.js, Express, MongoDB, and Angular",
        "AI researcher focused on deep learning, NLP, and PyTorch",
        "Frontend developer with React, Vue.js, and TailwindCSS",
        "Backend developer experienced with Django, PostgreSQL, and Docker",
        "Cloud engineer with AWS, Azure, Kubernetes, and Terraform skills",
        "Machine learning engineer with expertise in Scikit-learn and ML pipelines",
        "DevOps engineer with Jenkins, Docker, Kubernetes, and CI/CD pipelines",
        "Cybersecurity analyst experienced with threat modeling and incident response",
        "Business analyst with skills in SQL, Excel, Tableau, and data visualization",
        "QA engineer proficient in automated testing with Selenium and Python",
        "Mobile app developer with experience in Flutter and Android Studio",
        "AI engineer focused on computer vision and reinforcement learning",
        "Software architect with system design, microservices, and cloud solutions"
    ],
    "job_label": [
        "Software Engineer", "Data Scientist", "Full-Stack Developer",
        "AI Researcher", "Frontend Developer", "Backend Developer",
        "Cloud Engineer", "ML Engineer", "DevOps Engineer",
        "Cybersecurity Analyst", "Business Analyst", "QA Engineer",
        "Mobile Developer", "AI Engineer", "Software Architect"
    ]
}

# Convert to DataFrame
df = pd.DataFrame(data)

# Define pipeline: TF-IDF + Logistic Regression
pipeline = Pipeline([
    ('tfidf', TfidfVectorizer(stop_words='english')),
    ('clf', LogisticRegression(max_iter=1000))
])

# Train model
print("🚀 Training AI model with extended dataset...")
pipeline.fit(df['resume_text'], df['job_label'])

# Save model
with open('trained_model.pkl', 'wb') as model_file:
    pickle.dump(pipeline, model_file)

print("✅ Model trained and saved as trained_model.pkl")
