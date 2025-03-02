import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchComponents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  let [_, setSearchParams] = useSearchParams({});
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);
//   const searchTerms = searchParams.get("search") || "";

  useEffect(() => {
    if (debouncedTerm) {
      setSearchParams({ search: (debouncedTerm || "") });
    }else{
        setSearchParams({})
    }
  }, [debouncedTerm,setSearchParams]);

  return (
    <div className="z-[50] bg-[#191919] w-[80%] absolute left-1/2 translate-[-50%] mx-auto max-w-[1100px] -mt-7 rounded-2xl shadow-[0_4px_77px_0_rgba(0,0,0,0.25)] max-[500px]:w-[90%] max-[500px]:my-10 max-[500px]:static max-[500px]:translate-0">
      <div className="w-full  static   mx-auto bg-[#191919] z-50 p-5 max-[320px]:p-2 rounded-2xl shadow-[0_4px_77px_0_rgba(0,0,0,0.25)]">
        <h6 className="text-[#c9ac8c] text-xl font-semibold text-center mb-3 max-[400px]:text-[18px]">
          QIDIRISH
        </h6>
        <div className="flex items-center  rounded-xl p-2 gap-4 mx-10 max-[600px]:mx-0">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="text"
            placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
            className="flex-1 max-[500px]:w-full  text-gray-300  !bg-[#404040] rounded-lg  placeholder-gray-500 outline-none px-5 py-2"
          />
          <button className="!bg-[#c9ac8c]  hover:bg-[#b2947a] transition  *:bg-transparent *:font-medium px-4 py-2 rounded-xl flex items-center gap-2">
            Izlash
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchComponents;
