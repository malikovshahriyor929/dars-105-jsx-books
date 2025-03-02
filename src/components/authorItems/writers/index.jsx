import React from "react";

import { useNavigate } from "react-router-dom";

import "./index.css";

import { AudioOutlined, BookOutlined } from "@ant-design/icons";

const Writes = (props) => {
  let {
    id,
    name,
    birthYear,
    deathYear,
    image,
    audioBooks,
    paperBooks,
  } = props;
  let navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {navigate(`/about_writer/${id}`);
        }}
        className="writerShadow bg-black text-white rounded-lg w-44 min-h-44 pb-2 shadow-lg flex justify-between flex-col gap-1"
      >
        <div className="flex justify-center rounded-t-lg bg-black">
          <img
            src={image}
            // alt="Abdulla Avloniy"
            className="w-44 object-contain   opacity-70 h-32 rounded-t-lg"
          />
        </div>

        <div className="text-center px-2">
          <h2 className="text-lg font-semibold text-[#C4A484]">{name}</h2>
          <p className="text-gray-400">
            {birthYear}-{deathYear}
          </p>
        </div>

        <div className="flex justify-between px-4  text-gray-300">
          <div className="flex items-center gap-1">
            <BookOutlined className="text-xl" />
            <span>{paperBooks}</span>
          </div>
          <div className="flex items-center gap-1">
            <AudioOutlined className="text-xl" />
            <span>{audioBooks}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Writes;
