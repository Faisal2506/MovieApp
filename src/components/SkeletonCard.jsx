import React from "react";

const SkeletonCard = () => {
  return (
    <div className="p-4 animate-pulse">
      <div className="w-full h-64 bg-gray-300 rounded mb-2"></div>
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
    </div>
  );
};

export default SkeletonCard;
