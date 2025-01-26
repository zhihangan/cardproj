import openai
from flask import Flask, request, jsonify

# Set up Flask
app = Flask(__name__)

# Set OpenAI API key (make sure to securely set it)
openai.api_key = "open-ai-key"  # Or use an environment variable

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
        response = openai.Completion.create(
            model="text-davinci-003",  # You can use gpt-4 if available
            prompt=prompt,
            max_tokens=150
        )

        # Get the generated text from the response
        generated_backstory = response.choices[0].text.strip()

        # Return the generated backstory as JSON
        return jsonify({"backstory": generated_backstory}), 200

    except Exception as e:
        # If there's an error, return a message
        return jsonify({"error": str(e)}), 400


# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)
