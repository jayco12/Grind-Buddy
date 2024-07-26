from flask import Flask, request, jsonify
import openai
import os

app = Flask(__name__)
openai.api_key = os.getenv('OPENAI_API_KEY')
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

    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        max_tokens=150
    )

    return response.choices[0].text.strip()

@app.route('/find-match', methods=['POST'])
def find_match():
    data = request.get_json()
    new_request = data['new_request']
    current_requests = data['current_requests']
    best_match = find_best_match(new_request, current_requests)
    return jsonify({'best_match': best_match})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 3000)))

