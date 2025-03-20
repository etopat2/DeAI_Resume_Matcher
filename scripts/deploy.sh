#!/bin/bash

# Deploy script for DeAI Resume Maker

echo "🔄 Starting deployment..."

# Step 1: Deploy the ICP Canisters
echo "🚀 Deploying ICP canisters..."
dfx stop
dfx start --background
dfx deploy

# Step 2: Build the Frontend (React + Vite)
echo "🛠️ Building frontend..."
cd frontend
npm install
npm run build
cd ..

# Step 3: Start Backend Server (FastAPI)
echo "⚙️ Starting backend API server..."
cd backend
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000 --reload &
cd ..

echo "✅ Deployment complete! ICP canisters, backend, and frontend are live."

# Optional: Add log for accessing endpoints
echo "🌐 Access frontend: http://localhost:5173"
echo "🌐 Access backend API: http://localhost:8000"
