import React from "react";

const SkeletonMovieDetails = () => {
  return (
    <div className="bg-gray-600 pt-10">
      <div className="flex flex-col md:flex-row bg-gray-900 rounded-lg shadow-lg p-4 mx-10 animate-pulse">
        <div className="flex flex-row">
          <div className="md:w-1/5">
            <div className="rounded-lg w-[200px] h-[300px] bg-gray-300"></div>
          </div>
          <div className="md:w-2/3 md:ml-4 mt-4 md:mt-0 text-white flex-grow">
            <div className="h-8 bg-gray-300 rounded mb-4"></div>
            <div className="h-6 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-white text-center mb-4">Cast</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="text-center animate-pulse">
              <div className="rounded-lg w-full h-[200px] bg-gray-300 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonMovieDetails;
