import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SkeletonMovieDetails from "../components/SkeletonMovieDetail";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3/movie/`;

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await axios.get(
          `${BASE_URL}${id}?api_key=${API_KEY}&language=en-US`
        );
        setMovie(movieResponse.data);

        const castResponse = await axios.get(
          `${BASE_URL}${id}/credits?api_key=${API_KEY}&language=en-US`
        );
        setCast(castResponse.data.cast);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching the movie details:", error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <SkeletonMovieDetails />;

  return (
    <div className="bg-gray-600 pt-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row bg-gray-900 rounded-lg shadow-lg p-4 mx-2 md:mx-10">
        <div className="md:w-1/4 flex-shrink-0">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="md:w-3/4 md:ml-4 mt-4 md:mt-0 text-white flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <div className="flex flex-col md:flex-row mb-3">
            <h2 className="text-2xl text-blue-500 mr-2">Rating:</h2>
            <span className="text-lg text-yellow-500 border rounded-md w-20 flex justify-center items-center">
              {movie.vote_average}
            </span>
          </div>
          <div className="mb-2">
            <span className="text-xl border rounded-md p-1">{movie.runtime} min</span>
            <span className="ml-4">
              {movie.genres.map((genre) => genre.name).join(", ")}
            </span>
          </div>
          <span className="text-xl">Release date: </span>
          <span className="">{movie.release_date}</span>
          <div className="mt-4">
            <h1 className="text-white font-bold text-xl mt-10">Overview: </h1>
            <p className="mb-4 text-white max-w-50">{movie.overview}</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-white text-center mb-4">Cast</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {cast.map((member) => (
            <div key={member.cast_id} className="text-center">
              <img
                src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
                alt={member.name}
                className="rounded-lg w-full h-auto"
              />
              <p className="mt-2 text-white">{member.name}</p>
              <p className="text-gray-400">{member.character}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
