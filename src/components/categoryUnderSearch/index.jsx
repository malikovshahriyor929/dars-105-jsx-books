import React from "react";
import { Link } from "react-router-dom";

const CategoryUnderSearch = () => {
  return (
    <div className="mt-24 w-[90%] mx-auto flex flex-col items-center gap-4">
      <div>
        <h6 className="text-[31px] text-[#c9ac8c] text-center">
          Asosiy kategoriyalar
        </h6>
      </div>
      <div className="flex items-center gap-16 overflow-x-auto whitespace-nowrap px-2 py-2 max-w-full scrollbar-hide sm:gap-10">
        <Link to="/temuriylar">
          <h2 className="text-[rgba(255,255,255,0.6)] text-[20px] sm:text-[20px] min-w-max">
            Temuriylar davri
          </h2>
        </Link>
        <Link to="/jadid">
          <h2 className="text-[rgba(255,255,255,0.6)] text-[20px] sm:text-[16px] min-w-max">
            Jadid adabiyoti
          </h2>
        </Link>
        <Link to="/sovet">
          <h2 className="text-[rgba(255,255,255,0.6)] text-[20px] sm:text-[16px] min-w-max">
            Sovet davri
          </h2>
        </Link>
        <Link to="/mustaqillik">
          <h2 className="text-[rgba(255,255,255,0.6)] text-[20px] sm:text-[16px] min-w-max">
            Mustaqillik davri
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default CategoryUnderSearch;
