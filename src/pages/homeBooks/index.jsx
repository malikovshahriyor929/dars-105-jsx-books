import React from "react";
import Showcase from "../../components/showcase";
import SearchComponents from "../../components/search";
import CategoryUnderSearch from "../../components/categoryUnderSearch";
import Books from "../../components/books";

const HomeBooks = () => {
  return (
    <div className="h-full relative  bg-[#191919]">
      <div className="bgMain"></div>
      <Showcase />
      <SearchComponents />
      <CategoryUnderSearch />
      <Books />
    </div>
  );
};

export default HomeBooks;
