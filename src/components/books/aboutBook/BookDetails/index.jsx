import React from "react";

import tick from "../../../../shared/assets/svg/“.svg";

import { ArrowDownOutlined, StarFilled } from "@ant-design/icons";
import Books from "../..";
const BookDetails = (props) => {
  let {
    title,
    author,
    publishedDate,
    pageCount,
    genre,
    publisher,
    image,
    description,
  } = props;
  return (
    <div className="bg-[#191919] text-white min-h-screen p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">
        <div className="bg-[#222] p-6 rounded-lg flex justify-center">
          <img
            src={image}
            alt={title}
            className="rounded-lg w-full max-w-xs object-cover"
          />
        </div>

        <div className="bg-[#222] p-6 rounded-lg">
          <h6 className="text-[48px] text-[#c9ac8c] ">{title}</h6>
          <div className=" mt-2  first:text-[#c9ac8c] flex gap-3  ">
            <h6 className="text-[#c9ac8c] flex "> {author} </h6> |
            <StarFilled /> 4.4
          </div>
          <div className="mt-4 space-y-2 *:flex *:gap-3 ">
            <p>
              <span className="opacity-60  text-[20px]  ">Sahifalar soni:</span>
              {pageCount}
            </p>
            <p>
              <span className="opacity-60  text-[20px] ">Chop etilgan:</span>
              {publishedDate}
            </p>
            <p>
              <span className="opacity-60  text-[20px] ">Janri:</span> {genre}
            </p>
            <p>
              <span className="opacity-60  text-[20px] ">Nashriyot:</span>
              {publisher}
            </p>
          </div>
          <div className="flex flex-col gap-4 py-5">
            <div className="flex items-center gap-3">
              <p className="text-[#c9ac8c] text-nowrap">To’liq ma’lumot</p>
              <ArrowDownOutlined />
              <div className="w-full h-[1px] rounded-full bg-[#c9ac8c]"></div>
            </div>
            <p className=" text-gray-300 leading-relaxed">
              {description} {description}
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-10">
        <h2 className="text-2xl text-[#c9ac8c] font-semibold mb-4">
          Kitobdan iqtiboslar
        </h2>
        <div className="flex gap-5 ">
          {[1, 2].map((_, index) => (
            <blockquote
              key={index}
              className="bg-[#222] relative p-6 rounded-lg mt-4"
            >
              <div className="absolute -top-4 left-3 ">
                <img src={tick} alt="" />
              </div>{" "}
              <p className="text-gray-300 italic">
                Inson bolasi ne kunlarni ko‘rmaydi?! Har bir odam o‘z g‘ami
                bilan bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam
                tutib o‘tsa, bu moddiy olam shu kunlarga yetolarmidi? Hayot
                to‘lqini ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi
                suza olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib
                keladi.
              </p>
            </blockquote>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-5 justify-between">
          <p className="text-[#c9ac8c] text-[26px]">Sizga yoqishi mumkin</p>
          <p className="text-[25px]">Barchasini ko’rish</p>
        </div>
        <div className="flex flex-col">
          <Books page={7} grids={7} />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
