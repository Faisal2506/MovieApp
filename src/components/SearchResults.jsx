import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const api_key = "c45a857c193f6302f2b5061c3b85e743";

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1`
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

  if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-gray-500">
      <h1 className="mb-4 text-2xl font-bold text-center text-white">Search Results for &quot;{query}&quot;</h1>
      {results.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {results.map((movie) => (
            <div key={movie.id} className="p-4  rounded">
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-auto mb-4 "
                />
                <h2 className="text-xl font-bold text-center text-white">{movie.title}</h2>
                <p className="text-gray-400 text-center">Rating: {movie.vote_average}</p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found for "{query}".</p>
      )}
    </div>
  );
};

export default SearchResults;
