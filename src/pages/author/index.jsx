import React from "react";
import Showcase from "../../components/showcase";

import CategoryUnderSearch from "../../components/categoryUnderSearch";
import WritesComponent from "../../components/authorItems";
import SearchComponents from "../../components/search";

const Author = () => {
  return (
    <div className="  relative bg-[#191919] !h-full  ">
      <div className="bgMain"></div>
      <Showcase />
      <SearchComponents />

      <CategoryUnderSearch />
      <WritesComponent />
    </div>
  );
};

export default Author;
