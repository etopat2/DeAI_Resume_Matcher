#!/bin/bash

# AI Model Training Script

echo "🧠 Starting AI model training process..."

# Step 1: Navigate to AI directory
cd backend/ai

# Step 2: Install dependencies
echo "📦 Installing Python dependencies..."
pip install -r ../requirements.txt

# Step 3: Run training script
echo "🏋️‍♂️ Training AI model..."
python train_model.py

# Step 4: Save trained model
echo "💾 Saving model to models directory..."
mv trained_model.pkl models/

echo "✅ AI Model training complete and saved as models/trained_model.pkl"
