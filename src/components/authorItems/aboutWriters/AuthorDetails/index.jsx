import React from "react";
import Books from "../../../books";

const AuthorDetails = (props) => {
  let {  name, birthYear, deathYear, birthPlace, image, description } =
    props;
  return (
    <div className="bg-[#191919] text-white min-h-screen">
      <div className="w-[95%] max-w-[1440px] mx-auto py-10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-7">
        <div className="flex flex-col items-center text-center gap-8 bg-[#222] p-6 rounded-lg h-fit">
          <img

            src={image}
            alt={name}
            className="w-full min-h-[600px] rounded-lg object-cover"
          />
          <div className="flex flex-col md:flex-row items-center gap-7  text-[#c9ac8c] text-center">
            <div>
              <p className="text-sm text-gray-400">Tavallud sanasi</p>
              <h6 className="text-[39px] text-[#c9ac8c] font-light tracking-widest">
                {birthYear}
              </h6>
              <p className="text-gray-400 mt-2">{birthPlace}</p>
            </div>
            <div className="text-[39px] text-[#c9ac8c] font-light">-</div>
            <div>
              <p className="text-sm text-gray-400">Tavallud sanasi</p>
              <h6 className="text-[39px] text-[#c9ac8c] font-light tracking-widest">
                {deathYear}
              </h6>
              <p className="text-gray-400 mt-2">{birthPlace}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 ">
          <div className="bg-[#222] p-6 rounded-lg">
            <h1 className="text-4xl text-[#c9ac8c] font-semibold">{name}</h1>
            <p className="mt-4 text-gray-300 leading-relaxed">{description}</p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl text-[#c9ac8c] font-semibold ">Asarlari</h2>
            <Books page={4} grids={4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetails;
