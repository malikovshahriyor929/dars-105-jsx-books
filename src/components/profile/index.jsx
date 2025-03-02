import React from "react";

import { StarFilled } from "@ant-design/icons";
import Books from "../books";

const ProfileComponents = () => {
  return (
    <div className="bg-[#191919] text-white p-6 rounded-xl  mx-auto shadow-lg relative flex flex-col gap-6">
      <div className=" w-[95%] mx-auto max-w-[1440px] flex   gap-5">
        <div className=" flex flex-col gap-4">
          <div className="relative w-fit">
            <img
              src="https://s3-alpha-sig.figma.com/img/b221/faf4/cd80efbe262a37eea51a009ab7abb9e8?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VkLKAAnT1eVR4KE6FrlaNJAr3n~8D-lK33MG4qOFRv6GUpKXUvmmo-~YESjIL8~eMnCWA5Gt2EcuozZxYcMvZxByJ9--7luO5fx1OVaugQGNBL1oy~7Ry3iOiSIckCMBcnKSfLXiIAHA29BL1RHvYZtLET7I65ZWq60noPKzdEHHY-hUxcnzMjSw2LJZxTd80ertoNI5hyz35OTXGmZuqdQp1IspNA7vesVRic3SR0X8CKM33KaCtnL2~MKl6SSvrPRiyHI723o5iKq5IWi9xfApqUVIWzH6hqKvhuvBJdYTj-sK1ClzhwCuvhy1cdNVkE5O74bNjDNMEZ06Six7Mw__"
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-2 border-white"
            />
            <div className="absolute bottom-0 right-0 border-2 border-[#c9ac8c] bg-[#191919] p-1 px-2 rounded-full">
              <StarFilled className="!text-[#c9ac8c] " />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#c9ac8c] text-[22px]">Oltin kitobxon</p>
            <p className="text-[22px] font-light">186 ta kitob o‘qigan</p>
          </div>
        </div>
        <div>
          <h2 className="text-[32px] font-semibold text-[#c9ac8c]">
            Farruxbek Abdullayev
          </h2>
          <p className="text-white text-[22px]">
            Tavallud:
            <span className=" text-[rgba(255,255,255,0.6)]">
              February 08, 1999
            </span>
          </p>
          <p className="text-white text-[22px]">
            Manzili:
            <span className=" text-[rgba(255,255,255,0.6)]"> Jizzax</span>
          </p>
          <p className="text-white text-[22px]">
            Bio:
            <span className=" text-[rgba(255,255,255,0.6)]">
              Graphic designer and Developer
            </span>
          </p>
        </div>
      </div>
      <Books pagina={false} />
    </div>
  );
};

export default ProfileComponents;
