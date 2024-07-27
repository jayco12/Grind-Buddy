from flask import Flask, request, jsonify
from openai import OpenAI
import requests
import os
import anthropic
app = Flask(__name__)

@app.route('/find-match', methods=['POST'])
def find_match():
    data = request.get_json()
    new_request = data['new_request']
    current_requests = data['current_requests']
    best_match = find_best_match(new_request, current_requests)
    return jsonify({'best_match': best_match})

def find_best_match(new_request, current_requests):
    # Construct the prompt for the AI model
    prompt = (
        f"{anthropic.HUMAN_PROMPT} Given the following new study partner request:\n"
        f"{new_request}\n\n"
        f"And the current available requests:\n"
        f"{current_requests}\n\n"
        f"Please analyze the new request and find the best match from the available requests. Consider the following factors in order of importance:\n"
        f"    - Shared courses\n"
        f"    - Similar major\n"
        f"    - Shared interests\n"
        f"    - Compatible study preferences\n"
        f"    - Overlapping availability\n"
        f"    - Similar year of study\n\n"
        f"{anthropic.AI_PROMPT} Provide your recommendation with a brief explanation of why this match is the best fit."
    )

    # Create a new instance of the Anthropic API client
    c = anthropic.Client(api_key=os.getenv("OPENAI_API_KEY"))

    # Request a text completion from the Claude model
    resp = c.completion(
        prompt=f"{prompt} {anthropic.AI_PROMPT}",
        stop_sequences=[anthropic.HUMAN_PROMPT],
        model="claude-v1.3-100k",
        max_tokens_to_sample=1500,
    )

    # Extract and return the completion text
    response_data = resp['completion']
    return response_data.strip()

if __name__ == '__main__':
    app.run(debug=True)
