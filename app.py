from flask import Flask, request, jsonify
from openai import OpenAI
import openai
import os

app = Flask(__name__)
openai.api_key = os.getenv('OPENAI_API_KEY')
client = OpenAI()

def find_best_match(new_request, current_requests):
    # Convert current_requests to a format suitable for the API
    current_requests_formatted = "\n".join(current_requests)

    messages = [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": f"""
        Given the following new study partner request:
        {new_request}

        And the current available requests:
        {current_requests_formatted}

        Please analyze the new request and find the best match from the available requests. Consider the following factors in order of importance:

            Shared courses
            Similar major
            Shared interests
            Compatible study preferences
            Overlapping availability
            Similar year of study

        Provide your recommendation with a brief explanation of why this match is the best fit.
        """}
    ]

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",  # Or use "gpt-4" if you have access to it
        messages=messages
    )

    return response.choices[0].message['content'].strip()


@app.route('/find-match', methods=['POST'])
def find_match():
    data = request.get_json()
    new_request = data['new_request']
    current_requests = data['current_requests']
    best_match = find_best_match(new_request, current_requests)
    return jsonify({'best_match': best_match})

if __name__ == '__main__':
    app.run(debug=True)
