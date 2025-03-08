import React from "react";
import Showcase from "../../components/showcase";
import SearchComponents from "../../components/search";
import CategoryUnderSearch from "../../components/categoryUnderSearch";
import Books from "../../components/books";

const HomeBooks = () => {
  return (
    <div className="h-full relative *:z-40  bg-[#191919]">
      {/* <div className="bgMain !z-0"></div> */}
      <Showcase />
      <SearchComponents />
      <CategoryUnderSearch />
        <Books />
    </div>
  );
};

export default HomeBooks;
