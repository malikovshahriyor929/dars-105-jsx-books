import React, { useEffect, useState } from "react";
import BookCard from "./bookCard";
import { useQueryHandler } from "../../hooks/useQueryHandler";
import SkeletonBookCard from "./booksCardskeleton";
import { Pagination } from "antd";
import { useSearchParams } from "react-router-dom";
const Books = ({ page = 14, grids = 7, pagina = true }) => {
  let { data, isLoading } = useQueryHandler({
    pathname: "books",
    url: "/contact",
  });
  const [currentPage, setCurrentPage] = useState(1);
  let [searchParam] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const booksPerPage = page || 14;
  //search
  useEffect(() => {
    const searchValue = searchParam?.get("search") || "";
    setSearchTerm(searchValue?.toLowerCase());
    setCurrentPage(1);
  }, [searchParam]);

  // pagina = false
  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const paginatedBooks = data?.slice(startIndex, endIndex);
  return (
    <div className="w-[95%] mx-auto max-w-[1440px] py-5">
      <div
        className={` grid ${
          grids === 7 ? "grid-cols-7" : "grid-cols-4"
        } gap-7  `}
      >
        {isLoading
          ? [...Array(booksPerPage)]?.map((_, index) => (
              <SkeletonBookCard key={index} />
            ))
          : paginatedBooks
              ?.filter((value) =>
                value?.title?.toLowerCase()?.includes(searchTerm)
              )
              ?.map((value, index) => <BookCard key={index} {...value} />)}
      </div>
      {pagina && (
        <div className="flex justify-end pt-5">
          <Pagination
            className="bg-[#191919] text-white"
            defaultCurrent={currentPage}
            current={currentPage}
            pageSize={booksPerPage}
            onChange={(pages) => setCurrentPage(pages)}
            total={Array.isArray(data) ? data.length : 0}
            showSizeChanger={false}
          />
        </div>
      )}
    </div>
  );
};

export default Books;
