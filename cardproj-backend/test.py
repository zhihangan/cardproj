import openai
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv

# Set up Flask
app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

# Load .env file
load_dotenv()

# Set OpenAI API key (make sure to securely set it)
openai.api_key = os.getenv("OPENAI_KEY")
print(openai.api_key)

# Define a route to handle user input and generate a backstory
@app.route("/generate_backstory", methods=["POST"])
def generate_backstory():
    # Get personality values from the POST request (from a questionnaire)
    user_data = request.json

    # Assuming user_data contains a 'values' key with personality information
    personality_values = user_data.get("values", "")
    print(personality_values)

    # Generate a prompt for OpenAI based on personality data
    prompt = f"Write a backstory for a character with the following personality traits: {personality_values}"

    try:
        # Make the API request to OpenAI
        response = openai.completions.create(
            model="gpt-3.5-turbo",  # You can use gpt-4 if available
            prompt=prompt,
            max_tokens=300
        )

        # Get the generated text from the response
        generated_backstory = response.choices[0].text.strip()

        print(generated_backstory)
        # Return the generated backstory as JSON
        return jsonify({"backstory": generated_backstory}), 200

    except Exception as e:
        # If there's an error, return a message
        print(e)
        return jsonify({"error": str(e)}), 400


# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)
