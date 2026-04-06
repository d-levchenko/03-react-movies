import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './App.module.css';

export default function App() {
  const [query, setQuery] = useState('');

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
    </>
  );
}
