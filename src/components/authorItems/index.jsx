import React, { useEffect, useState } from "react";
import { useQueryHandlerWriters } from "../../hooks/useQueryHandlerWriters";
import Writes from "./writers";
import { Skeleton } from "antd";
import { useSearchParams } from "react-router-dom";

const WritesComponent = () => {
  const { data, isLoading } = useQueryHandlerWriters({
    pathname: "writers",
    url: "/ApiForWriters",
  });
  const [searchTerm, setSearchTerm] = useState("");
  let [searchParam] = useSearchParams();
  useEffect(() => {
    const searchValue = searchParam.get("search") || "";
    setSearchTerm(searchValue.toLowerCase());
  }, [searchParam]);

  return (
    <div className="w-[95%] mx-auto max-w-[1440px]   py-7">
      <div className="flex flex-wrap max-[500px]:gap-6 gap-10 justify-center">
        {isLoading
          ? [1, 2, 3]?.map((_, idx) => <Skeleton key={idx} active />)
          : data
              ?.filter((value) =>
                value?.name?.toLowerCase().includes(searchTerm)
              )
              ?.map((value) => <Writes key={parseInt(value.id)} {...value} />)}
      </div>
    </div>
  );
};

export default WritesComponent;
