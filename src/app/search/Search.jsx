"use client";

import { useState } from 'react';
import axios from 'axios';
import styles from "./search.module.css";

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/search', { query });
    setResults(response.data.results);
  };
  const handleClear = () => {
    setQuery('');
    setResults([]);
  };
  return (
    <form className={styles.form} onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />
      <button type="submit">Search</button>
      <button type="button" onClick={handleClear}>Clear</button>
      <div className={styles.result}>
        {results.map((result) => (
           <div key={result._id} className={styles.result}>
           <p><span>Name:</span> {result.username}</p>
           <p><span>Email:</span> {result.email}</p>
           <p><span>University:</span> {result.school}</p>
          </div>
        ))}
      </div>
    </form>
  );
};

export default Search;
