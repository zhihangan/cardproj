import os
import openai
from flask import Flask, request, jsonify

# Set up Flask
app = Flask(__name__)

# Set OpenAI API key
openai.api_key = "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"

# Define a route to handle user input and generate a backstory
@app.route("/generate_backstory", methods=["POST"])
def generate_backstory():
    # Get personality values from the POST request (from a questionnaire)
    user_data = request.json

    # Assuming user_data contains a 'values' key with personality information
    personality_values = user_data.get("values", "")

    # Generate a prompt for OpenAI based on personality data
    prompt = f"Write a backstory for a character with the following personality traits: {personality_values}"

    try:
        # Make the API request to OpenAI
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",  # Use "gpt-4" if available and preferred
            messages=[
                {"role": "system", "content": "You are an assistant that generates creative responses based on user prompts."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=300,  # Adjust as needed
            temperature=0.7  # Controls creativity
        )

        # Get the generated text from the response
        generated_backstory = response.choices[0].message['content'].strip()

        # Return the generated backstory as JSON
        return jsonify({"backstory": generated_backstory}), 200

    except Exception as e:
        # If there's an error, return a message
        print(f"Error: {e}")  # Debugging in the console
        return jsonify({"error": str(e)}), 400

# Define a test route to trigger the generate_backstory function
@app.route("/test_generate_backstory")
def test_generate_backstory():
    # Simulate a POST request with test data
    with app.test_request_context(json={"values": "brave, intelligent, kind"}):
        return generate_backstory()
print(generate_backstory)
# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)
