import React from "react";

const Skeleton = () => {
  return (
    <div className="w-[95%] mx-auto max-w-[1440px] py-5">
      <div className="flex gap-6 animate-pulse">
        <div className="w-[400px] h-[600px] bg-gray-700 rounded-lg"></div>
        <div className="flex-1 space-y-4">
          <div className="h-10 bg-gray-700 rounded"></div>
          <div className="h-20 bg-gray-700 rounded"></div>
          <div className="h-6 w-1/2 bg-gray-700 rounded"></div>
              <h2 className="text-3xl mt-8 bg-gray-700 h-10 w-40 rounded"></h2>
          <div className="grid grid-cols-4 gap-6 mt-5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-72 bg-gray-700 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
