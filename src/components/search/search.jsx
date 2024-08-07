"use client";
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import styles from "./search.module.css";

const SearchPage = () => {
  const { data: session } = useSession();
  const [newRequest, setNewRequest] = useState({
    username: '',
    availability: '',
    interests: '',
    major: '',
    shared_courses: '',
    study_preferences: '',
    year_of_study: ''
  });
  const [currentRequests, setCurrentRequests] = useState([]);
  const [bestMatch, setBestMatch] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRequest({ ...newRequest, [name]: value });
  };

  const handleTestAI = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/find-match', {
        new_request: newRequest,
        current_requests: currentRequests
      });

      setBestMatch(response.data.best_match);
    } catch (error) {
      console.error("Error finding match:", error);
      setBestMatch("An error occurred while finding a match. Please try again.");
    }
  };

  const handleClear = () => {
    setNewRequest({
      username: '',
      availability: '',
      interests: '',
      major: '',
      shared_courses: '',
      study_preferences: '',
      year_of_study: ''
    });
    setBestMatch(null);
  };

  return (
    <div className={styles.form}>
    
      <form className={styles.inputContainer} onSubmit={handleTestAI}>
        {Object.keys(newRequest).map((field, index) => (
          <input
            key={index}
            type="text"
            name={field}
            value={newRequest[field]}
            onChange={handleInputChange}
            placeholder={`Enter ${field.replace('_', ' ')}`}
          />
        ))}
        <div className={styles.buttonContainer}>
          <button type="submit">Find Match</button>
          <button type="button" onClick={handleClear}>Clear</button>
        </div>
      </form>
      <div className={styles.resultContainer}>
        {bestMatch && (
          <div className={styles.result}>
            <pre>{JSON.stringify(bestMatch, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;