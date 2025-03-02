import React from "react";
import { useParams } from "react-router-dom";
import { useQueryHandler } from "../../../hooks/useQueryHandler";
import Skeleton from "../../authorItems/aboutWriters/skeleton";
import BookDetails from "./BookDetails";

const AboutBook = () => {
  let { bookId } = useParams();
  let { data, isLoading } = useQueryHandler({
    pathname: "books",
    url: "/contact",
  });

  return (
    <div className="relative h-full  bg-[#191919] ">
      <div className="bgMain"></div>

      {isLoading ? (
        <Skeleton />
      ) : (
        data.map(
          (value) =>
            value?.id == bookId && <BookDetails key={value?.id} {...value} />
        )
      )}
    </div>
  );
};

export default AboutBook;
