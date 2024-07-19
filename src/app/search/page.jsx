"use client";

import { useState } from 'react';
import axios from 'axios';
import styles from "./search.module.css";

const Search = () => {
  const [query, setQuery] = useState('');
  const [generatedText, setGeneratedText] = useState('');

  const handleTestAI = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/search', { query });
      setGeneratedText(response.data.generatedText);
    } catch (error) {
      console.error("Error generating text:", error);
      setGeneratedText("An error occurred while generating text. Please try again.");
    }
  };

  const handleClear = () => {
    setQuery('');
    setGeneratedText('');
  };

  return (
    <div className={styles.form}>
      <form className={styles.inputContainer} onSubmit={handleTestAI}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter prompt"
        />
        <div className={styles.buttonContainer}>
          <button type="submit">Generate</button>
          <button type="button" onClick={handleClear}>Clear</button>
        </div>
      </form>
      <div className={styles.resultContainer}>
        {generatedText && (
          <div className={styles.result}>
            <p>{generatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
