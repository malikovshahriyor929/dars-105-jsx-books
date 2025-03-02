import React from "react";

import showcase from "../../shared/assets/svg/showcase.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";

const Showcase = () => {
  return (
    <div className="!relative w-[95%] mx-auto max-w-[1440px] z-20 py-10 bg-[#191919]  ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper  relative bg-transparent   "
      >
        {[1, 2, 3, 4].map((_, idx) => (
          <SwiperSlide
            key={idx}
            className="bg-transparent relative flex rounded-xl items-center z-40 justify-center"
          >
            <img className=" max-[1247px]:!min-h-[350px] rounded-xl object-right   bg-transparent max-[1247px]:object-cover" src={showcase} alt="" />
            <div>
              <h6 className="text-[55px] max-[1404px]:text-[48px] max-[574px]:text-[40px] max-[574px]:max-w-[200px] max-[504px]:text-[30px]  text-[#c9ac8c] absolute top-5 max-[416px]:top-3/5 max-[416px]:text-[25px] left-[5%] max-w-[337px] !bg-transparent">
                Temuriylar davri adabiyoti
              </h6>
            </div>
          </SwiperSlide>
        ))}
        <div className="custom-pagination"></div>
      </Swiper>
    </div>
  );
};

export default Showcase;
