import axios from 'axios';
import type { Movie } from '../types/movie';

const BASE_URL = '';
const token = import.meta.env.VITE_TMBD_TOKEN;

interface TmbdResponse {
  total_results: number;
  total_pages: number;
  page: number;
  result: Movie[];
}

const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<TmbdResponse>(`${BASE_URL}/search/movie`, {
    params: query,
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data.result;
};

export default fetchMovies;
