import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './App.module.css';
import toast from 'react-hot-toast';
import MovieGrid from '../MovieGrid/MovieGrid';
import type { Movie } from '../../types/movie';
import fetchMovies from '../../services/movieService';
import Loader from '../Loader/Loader';

export default function App() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovies, setSelectedMovies] = useState<Movie | null>(null);

  const handleSearch = async (query: string) => {
    setError(false);
    setLoading(true);
    setMovies([]);
    setSelectedMovies(null);

    try {
      const response = await fetchMovies(query);
      setMovies(response);

      if (response.length === 0) {
        toast.error('No movies found for your request.');
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovies(movie);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      <MovieGrid movies={movies} onSelect={handleMovieSelect} />
    </>
  );
}
