import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { Dropdown, Space } from "antd";

// import userImg from "../../shared/assets/svg/Mask Group (4).svg";
import {
  CloseOutlined,
  DownOutlined,
  LogoutOutlined,
  MenuOutlined,
} from "@ant-design/icons";
const Header = () => {
  let [menuBar, setMenuBar] = useState(false);
  let navigate = useNavigate();
  let localImg = JSON.parse(localStorage?.getItem("userdata"))?.image || "";

  const items = [
    {
      key: "/account",
      label: "My Account",
    },
    // {
    //   type: "divider",
    // },
    // {
    //   // key: "/profile",
    //   // label: "Profile",
    // },
  ];
  let navigateProfile = (e) => {
    navigate(e?.key);
  };
  return (
    <div className=" border-b bg-[#191919] border-[rgba(255,255,255,0.1)]">
      <div className="max-w-[1440px] w-[95%] mx-auto max-[879px]:flex justify-between grid !grid-cols-[0.8fr_1.2fr] items-start gap-3 pt-4  ">
        <div className="flex w-fit items-center  gap-4 ">
          <div
            onClick={() => setMenuBar(!menuBar)}
            className="hidden max-[879px]:flex text-white "
          >
            <MenuOutlined />
          </div>
          <Link to={"/"}>
            <h6 className="text-[#c9ac8c] text-[25px]">Badiiyat</h6>
          </Link>
        </div>
        <div className="flex  justify-between h-fit">
          <div
            style={{ left: menuBar && 0 }}
            className=" duration-500 max-[879px]:fixed max-[879px]:w-full max-[879px]:pl-4 max-[879px]:pt-5
     top-0 left-[-100%] max-[879px]:flex-col flex bg-[#191919]  items-center max-[879px]:h-screen  gap-6 max-[951px]:gap-4 z-[888]"
          >
            <div className=" relative w-fit pb-7 max-[879px]:pb-0 max-[879px]:py-2 max-[879px]:w-full max-[879px]:h-fit">
              <NavLink to={"/"}>
                <p className="font-light text-[#fff]   ">Bosh sahifa</p>
              </NavLink>
            </div>
            <div className=" relative w-fit pb-7 max-[879px]:pb-0 max-[879px]:py-2 max-[879px]:w-full max-[879px]:h-fit">
              <NavLink to={"/books"}>
                <p className="font-light text-[#fff]  ">Nasr</p>
              </NavLink>
            </div>
            <div className=" relative w-fit pb-7 max-[879px]:pb-0 max-[879px]:py-2 max-[879px]:w-full max-[879px]:h-fit">
              <NavLink to={"/1"}>
                <p className="font-light text-[#fff]  ">Nazm</p>
              </NavLink>
            </div>
            <div className=" relative w-fit pb-7 max-[879px]:pb-0 max-[879px]:py-2 max-[879px]:w-full max-[879px]:h-fit">
              <NavLink to={"/2"}>
                <p className="font-light text-[#fff]  ">Maqolalar</p>
              </NavLink>
            </div>
            <div className=" relative w-fit pb-7 max-[879px]:pb-0 max-[879px]:py-2 max-[879px]:w-full max-[879px]:h-fit">
              <NavLink to={"/3"}>
                <p className="font-light text-[#fff]  ">Forum</p>
              </NavLink>
            </div>
            <div
              className="absolute top-5 right-6 text-white max-[879px]:flex hidden  "
              onClick={() => setMenuBar(!menuBar)}
            >
              <CloseOutlined />
            </div>
          </div>
          <div className="flex items-center pb-3 h-fit w-fit gap-4  ">
            <button onClick={() => navigate("/logIn")}>
              <LogoutOutlined className="text-[25px]" />
            </button>
            <img
              className="h-10 w-10 object-cover rounded-full"
              src={
                !localImg
                  ? "https://e7.pngegg.com/pngimages/753/432/png-clipart-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service.png"
                  : localImg
              }
            />
            <Dropdown
              menu={{
                items,
                onClick: navigateProfile,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <DownOutlined className="text-white" />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
