"use client";

import { useState } from 'react';
import axios from 'axios';
import styles from "./search.module.css";

const Search = () =>
{
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
  const [studyPreferences] = useState(['Group study', 'one-on-one', 'virtual']);
  const [yearOfStudy] = useState(['freshman', 'sophmore', 'junior', 'senior']);
  
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
        {Object.keys(newRequest).map((field, index) => {
          if (field === 'major') {
            return (
              <select
                key={field}
                name="major"
                value={newRequest.major}
                onChange={handleInputChange}
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
                key={field}
                name="study_preferences"
                value={newRequest.study_preferences}
                onChange={handleInputChange}
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
                key={field}
                name="year_of_study"
                value={newRequest.year_of_study}
                onChange={handleInputChange}
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

export default Search;