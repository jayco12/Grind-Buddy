"use client";

import { useState } from 'react';
import axios from 'axios';
import styles from "./search.module.css";

const SearchPage = () => {
  const [newRequest, setNewRequest] = useState({
    username: '',
    availability: '',
    interests: '',
    major: '',
    shared_courses: '',
    study_preferences: '',
    year_of_study: ''
  });

  const [majors] = useState(['Computer Science', 'Engineering']);
  const [studyPreferences] = useState(['morning', 'Afternoon',' Evening','one-on-one', 'virtual']);
  const [yearOfStudy] = useState(['1', '2', '3', '4']);

  const [currentRequests, setCurrentRequests] = useState([]);
  const [bestMatch, setBestMatch] = useState(null);

  const [loading, setLoading] = useState(false);  // Loading state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRequest({ ...newRequest, [name]: value });
  };


  const getRandomMatch = (matches) => {
    if (matches.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * matches.length);
    return matches[randomIndex];
  };

  const handleTestAI = async (e) => {
    e.preventDefault();
    setLoading(true);  
    try {
      const response = await axios.post('/api/find-match', {
        new_request: newRequest,
        current_requests: currentRequests
      });

      const matches = response.data.matches;
      if (matches.length > 0) {
        setBestMatch(matches[0]); // Assuming the best match is the first one in the list
      } else {
        const randomMatch = getRandomMatch(currentRequests);
        setBestMatch(randomMatch
          ? { ...randomMatch, message: "No exact match found. Here's a possible match based on the given information." }
          : { message: "No match found." });
      }
    } catch (error) {
      console.error("Error finding match:", error);
      setBestMatch("An error occurred while finding a match. Please try again.");
     } finally {
      setLoading(false);  // Stop loading
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
  {Object.keys(newRequest).map((field, index) => {
    if (field === 'major') {
      return (
        <select
        key={`major-${index}`} 
          name="major"
          value={newRequest.major}
          onChange={handleInputChange}
          className={styles.inputField}
          required
        >
          <option value="">Select major</option>
          {majors.map((major, index) => (
            <option key={index} value={major}>{major}</option>
          ))}
        </select>
      );
    } else if (field === 'study_preferences') {
      return (
        <select
        key={`study_preferences-${index}`}
          name="study_preferences"
          value={newRequest.study_preferences}
          onChange={handleInputChange}
          className={styles.inputField}
          required
        >
          <option value="">Select study preference</option>
          {studyPreferences.map((pref, index) => (
            <option key={index} value={pref}>{pref}</option> 
          ))}
        </select>
      );
    } else if (field === 'year_of_study') {
      return (
        <select
        key={`year_of_study-${index}`}
          name="year_of_study"
          value={newRequest.year_of_study}
          onChange={handleInputChange}
          className={styles.inputField}
        >
          <option value="">Select year of study</option>
          {yearOfStudy.map((year, index) => (
            <option key={index} value={year}>{year}</option> 
          ))}
        </select>
      );
    } else {
      return (
        <input
          key={index}
          type="text"
          name={field}
          value={newRequest[field]}
          onChange={handleInputChange}
          placeholder={`Enter ${field.replace('_', ' ')}`}
          className={styles.inputField}
        />
      );
    }
  })}
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
