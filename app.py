from flask import Flask, request, jsonify
from openai import OpenAI
import requests
import os

app = Flask(__name__)
claude_api_key = os.getenv('OPENAI_API_KEY')
client = OpenAI()

def find_best_match(new_request, current_requests):
    prompt = f"""
    Given the following new study partner request:
    {new_request}

    And the current available requests:
    {current_requests}

    Please analyze the new request and find the best match from the available requests. Consider the following factors in order of importance:

        Shared courses
        Similar major
        Shared interests
        Compatible study preferences
        Overlapping availability
        Similar year of study

    Provide your recommendation with a brief explanation of why this match is the best fit.
    """

    headers = {
        'Authorization': f'Bearer {claude_api_key}',
        'Content-Type': 'application/json',
    }

    data = {
        'prompt': prompt,
        'max_tokens_to_sample': 150,
    }

    response = requests.post('https://api.anthropic.com/v1/complete', headers=headers, json=data)
    response_data = response.json()

    return response_data['completion'].strip()

@app.route('/find-match', methods=['POST'])
def find_match():
    data = request.get_json()
    new_request = data['new_request']
    current_requests = data['current_requests']
    best_match = find_best_match(new_request, current_requests)
    return jsonify({'best_match': best_match})

if __name__ == '__main__':
    app.run(debug=True)