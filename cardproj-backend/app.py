from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import openai

# FastAPI app
app = FastAPI()

# OpenAI API Key (use environment variables in production)
openai.api_key = "your_openai_api_key_here"

# Request model for story generation
class StoryRequest(BaseModel):
    description: str
    keywords: list
    style: str = "fantasy"  # Default style

# Generate story endpoint
@app.post("/generate-story")
def generate_story(request: StoryRequest):
    try:
        # Create the prompt based on the input
        prompt = (
            f"Create a detailed {request.style} story based on this description: '{request.description}'. "
            f"Include these key traits or elements: {', '.join(request.keywords)}. "
            f"The story should be engaging and follow a coherent narrative."
        )

        # Call OpenAI API
        response = openai.Completion.create(
            model="text-davinci-003",  # Use GPT-4 if available
            prompt=prompt,
            max_tokens=1000,
            temperature=0.7
        )

        # Extract the story from the API response
        story = response.choices[0].text.strip()

        return {"story": story}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Health check route
@app.get("/health")
def health_check():
    return {"status": "Healthy"}