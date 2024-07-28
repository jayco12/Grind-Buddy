import os
import time
from flask import Flask, request, jsonify
import google.generativeai as genai
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

app = Flask(__name__)

# Configure API key for Gemini
API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel('gemini-1.5-flash', generation_config={"response_mime_type": "application/json"})

# Configure MongoDB
MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI)
db = client['auth']  # replace with your database name
collection = db['users']  # replace with your collection name

@app.route('/find-match', methods=['POST'])
def find_match():
    start_time = time.time()
    data = request.get_json()
    new_request = data['new_request']
    
    # Fetch current requests from MongoDB
    current_requests = list(collection.find({}, {'_id': 0}))  # Exclude the _id field from results

    best_match = find_best_match(new_request, current_requests)
    end_time = time.time()
    print(f"Total request duration: {end_time - start_time} seconds")
    return jsonify({'best_match': best_match})

def find_best_match(new_request, current_requests):
    # Construct the prompt for the AI model
    prompt = (
        f"Given the following new study partner request:\n"
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
        f"Provide your recommendation with a brief explanation of why this match is the best fit."
    )

    # Generate content using the Gemini API
    response = model.generate_content(prompt)
    return response.text.strip()

if __name__ == '__main__':
    app.run(debug=True)
