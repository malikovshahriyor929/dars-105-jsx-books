import React from "react";

import { StarFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const BookCard = ({id, image, title, author }) => {
    let navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/about_book/${id}`)} className="bg-[#191919] text-white  rounded-lg w-full flex flex-col gap-2 justify-between max-h-[338px]">
      <img
        src={image}
        className="w-full min-h-[246px] rounded-lg object-cover"
      />
      <h6 className=" text-[20px] text-[#c9ac8c] font-medium  truncate">
        {title}
      </h6>
      <p className="text-sm text-gray-400 truncate">{author}</p>
      <div className="flex items-center gap-1 mt-1">
        <StarFilled className="w-4 h-4 text-yellow-400" />
        <span className="text-sm">4.4 · 300 ta fikrlar</span>
      </div>
    </div>
  );
};

export default BookCard;
