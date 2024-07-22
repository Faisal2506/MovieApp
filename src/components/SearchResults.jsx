import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
        );
        const data = await response.json();
        setResults(data.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
      setLoading(false);
    };

    fetchSearchResults();
  }, [query]);

  if (!query) {
    return <p>No results found for &quot;{query}&quot;.</p>;
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="w-full min-h-screen bg-gray-500">
      <h1 className="mb-4 text-2xl font-bold text-center text-white">Search Results for &quot;{query}&quot;</h1>
      {results.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {results.map((movie) => (
            <div key={movie.id} className="p-4 rounded">
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-auto mb-4"
                />
                <h2 className="text-xl font-bold text-center text-white">{movie.title}</h2>
                <p className="text-white text-center">Rating: {movie.vote_average}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-white">No results found for &quot;{query}&quot;.</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
