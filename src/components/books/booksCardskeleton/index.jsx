import React from "react";

const SkeletonBookCard = () => {
  return (
    <div className="bg-[#191919] p-4 rounded-lg w-[200px] animate-pulse">
      <div className="w-full h-[280px] bg-gray-700 rounded-lg"></div>
      <div className="mt-3 h-4 bg-gray-600 w-3/4 rounded"></div>
      <div className="mt-2 h-3 bg-gray-600 w-1/2 rounded"></div>
      <div className="mt-2 h-3 bg-gray-600 w-2/3 rounded"></div>
    </div>
  );
};

export default SkeletonBookCard;
