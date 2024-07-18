// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
// const BASE_URL = `https://api.themoviedb.org/3/movie/`;

// const MovieDetails = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [cast, setCast] = useState([]);

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const movieResponse = await axios.get(
//           `${BASE_URL}${id}?api_key=${API_KEY}&language=en-US`
//         );
//         setMovie(movieResponse.data);

//         const castResponse = await axios.get(
//           `${BASE_URL}${id}/credits?api_key=${API_KEY}&language=en-US`
//         );
//         setCast(castResponse.data.cast);
//       } catch (error) {
//         console.error("Error fetching the movie details:", error);
//       }
//     };

//     fetchMovieDetails();
//   }, [id]);

//   if (!movie) return <div>Loading...</div>;

//   return (
//     <div className="container p-4 mx-auto">
//       <div className="flex flex-col p-4 bg-gray-900 rounded-lg shadow-lg md:flex-row">
//         <img
//           src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//           alt={movie.title}
//           className="border h-40 rounded-lg md:w-1/3"
//         />
//         <div className="text-white md:ml-4">
//           <h1 className="mb-2 text-3xl font-bold">{movie.title}</h1>
//           {/* <p className="mb-4 text-gray-300">{movie.overview}</p> */}
//           <p className="text-gray-400">
//             <strong>Release Date:</strong> {movie.release_date}
//           </p>
//           <p className="text-gray-400">
//             <strong>Rating:</strong> {movie.vote_average}
//           </p>
//           <p className="text-gray-400">
//             <strong>Runtime:</strong> {movie.runtime} minutes
//           </p>
//           <p className="text-gray-400">
//             <strong>Genres:</strong>{" "}
//             {movie.genres.map((genre) => genre.name).join(", ")}
//           </p>
//         </div>
//         <div className="items-center h-100">
//           <img
//             src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
//             alt={movie.title}
//             className="hidden rounded-lg md:block md:w-2/3"
//           />
//         </div>
//       </div>
//       <div className="mt-8">
//         <h2 className="mb-4 text-2xl font-bold text-black">Cast</h2>
//         <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//           {cast.map((member) => (
//             <div
//               key={member.cast_id}
//               className="p-2 text-center bg-gray-800 rounded-lg"
//             >
//               <img
//                 src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
//                 alt={member.name}
//                 className="w-full h-auto rounded-lg"
//               />
//               <p className="mt-2 font-semibold text-white">{member.name}</p>
//               <p className="text-gray-400">{member.character}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = `https://api.themoviedb.org/3/movie/`;

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

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
      } catch (error) {
        console.error("Error fetching the movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="bg-gray-600 pt-10">
      <div className="flex flex-col md:flex-row bg-gray-900 rounded-lg shadow-lg p-4 mx-10">
      <div className="">
      <div className="flex flex-row">
        <div className="md:w-1/5">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg w-[200px]"
          />
        </div>
        <div className="md:w-2/3 md:ml-4 mt-4 md:mt-0 text-white flex-grow">
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <div className="">
          <div className="flex mb-3">
           <h2 className="text-2xl text-blue-500 mr-2">Rating:</h2>
            <span className="text-lg text-yellow-500 border rounded-md w-20 flex justify-center items-center">{movie.vote_average}</span>
            </div>
            <div className="mb-2">
            <span className="text-xl border rounded-md p-1">{movie.runtime} min</span>
            <span className="ml-4">
              {movie.genres.map((genre) => genre.name).join(", ")}
            </span>
            {/* <span className="ml-4">{movie.release_date}</span> */}
            </div>
            <span className="text-xl">Release date: </span>
            <span className="">{movie.release_date}</span>
          </div>
          </div>
        </div>
          <div>
          <h1 className="text-white font-bold text-xl mt-10">Overview: </h1>
          <p className="mb-4 text-white max-w-50">{movie.overview}</p>
          </div>
        </div>
        <div className="">
          <img
            src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
            alt={movie.title}
            className="hidden rounded-lg md:block md:w-full h-full"
          />
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
                className="rounded-lg w-full"
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
