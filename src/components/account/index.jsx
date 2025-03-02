import React, { useEffect, useState } from "react";
import { Button, Input, Switch, Tabs } from "antd";
import { ArrowLeftOutlined, CameraOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useQueryHandler } from "../../hooks/useQueryHandler";
import axios from "axios";

const AcoountComponents = () => {
  const [activeKey, setActiveKey] = useState("1");
  let [check, setCheck] = useState(false);
  const [enabled, setEnabled] = useState(true);
  let navigate = useNavigate();

  let { reset, register, handleSubmit } = useForm();

  let Submit = (formValue) => {
    console.log(formValue);
  };

  useEffect(() => {
    // axios.get("https://678944a52c874e66b7d8381f.mockapi.io/login")
  }, []);

  const items = [
    {
      key: "1",
      label: (
        <div className="flex items-center gap-2 py-3  ">
          <span
            className={`px-3 py-1 ${
              activeKey == 1
                ? "bg-[#152540] text-white"
                : "bg-gray-200 text-[#3699ff]"
            }  rounded-lg`}
          >
            1
          </span>
          <span
            className={`font-semibold ${
              activeKey == 1 && "text-[#152540]"
            } text-[#464e5f]`}
          >
            My account
          </span>
        </div>
      ),
      children: (
        <>
          <div className="flex justify-center items-center ">
            <div className="bg-white p-8 max-[851px]:mx-0 max-[850px]:p-5 max-[726px]:mt-0 mx-10 mt-10 h-full w-full flex max-[726px]:flex-col ">
              <div className="w-1/4 max-[726px]:w-full flex flex-col items-center">
                <div className="relative">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/cd50/92f3/31b6a258d24333f5bd374d28d64f9a0a?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jvjdw5aOmu-tFKFp-cpHB6Keswac-rGTDido91tfXvuCeHHAf4ZvP64GiL2yrIzzbIvK2wRZl66CRREm31-VdXv~IHTn2UvSOkQW0GBkYDchcU-cITDrCxkl6u8FgXLF40FXF8QAwEZaa9aCIIGFQxixWFpR0F9FLemkzTGk5KBzu6t198OQYsQbf5goq9yqDMf4b6a4FM7ye4h5y9eSBiPdm3rIAd9nE9Ni4mIuuPDYFgWStX7NoF0QSYIgTy1NzRsKb9GQW7FZCvxikOfJev4SjSbQ9Cotv6VKGuFc~ofNqEDZrgcj6-5OSiZw~iY06E2lz0UQN1OsoaerLkAzyg__"
                    alt="Profile"
                    className="w-44 h-44 rounded-full object-cover "
                  />
                  <button className="absolute bottom-0 right-0 bg-gray-200 p-1 px-2 rounded-full shadow-md">
                    <CameraOutlined className="text-lg" />
                  </button>
                </div>
              </div>

              <form
                onSubmit={handleSubmit(Submit)}
                className="w-3/4 max-[726px]:w-full px-6 max-[320px]:px-0"
              >
                <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col w-full">
                    <label className="block text-gray-600 mb-1">
                      First Name
                    </label>
                    <input
                      {...register("firstName")}
                      placeholder="John"
                      className="bg-[#f3f6f9] px-3 py-2 rounded-lg w-full"
                    />
                    <label className="text-[12px] text-[#b5b5c3] opacity-80 ">
                      Please enter your first name.
                    </label>
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="block text-gray-600 mb-1">
                      Last Name
                    </label>
                    <input
                      {...register("lastName")}
                      placeholder="Wick"
                      className="bg-[#f3f6f9] px-3 py-2 rounded-lg w-full"
                    />
                    <label className="text-[12px] text-[#b5b5c3] opacity-80 ">
                      Please enter your last name.
                    </label>
                  </div>
                  <div className="flex items-center max-[500px]:flex-col gap-6">
                    <div className="flex flex-col w-full">
                      <label className="block text-gray-600 mb-1">Phone</label>
                      <input
                        {...register("phone")}
                        placeholder="+61412345678"
                        className="bg-[#f3f6f9] px-3 py-2 rounded-lg w-full"
                      />
                      <label className="text-[12px] text-[#b5b5c3] opacity-80 ">
                        Please enter your phone number.
                      </label>
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="block text-gray-600 mb-1">Email</label>
                      <input
                        {...register("email")}
                        placeholder="john.wick@reeves.com"
                        className="bg-[#f3f6f9] px-3 py-2 rounded-lg w-full"
                      />
                      <label className="text-[12px] text-[#b5b5c3] opacity-80 ">
                        Please enter your email address.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end  mt-6">
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="!bg-[#152540]"
                  >
                    Save Changes
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </>
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex items-center gap-2 py-3">
          <span
            className={`px-3 py-1 ${
              activeKey == 2
                ? "bg-[#152540] text-white"
                : "bg-gray-200 text-[#3699ff]"
            }  rounded-lg`}
          >
            2
          </span>
          <span
            className={`font-semibold ${
              activeKey == 2 && "text-[#152540]"
            } text-[#464e5f]`}
          >
            Security
          </span>
        </div>
      ),
      children: (
        <div>
          <from className="bg-white p-8 mx-10 max-[400px]:mx-0 rounded-lg  ">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Change Or Recover Your Password
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  className="bg-[#f3f6f9] px-3 py-2 rounded-lg w-full "
                  placeholder="admin@mail.ru"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  className="bg-[#f3f6f9] px-3 py-2 rounded-lg w-full "
                  placeholder="********"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600 mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="bg-[#f3f6f9] px-3 py-2 rounded-lg w-full "
                    placeholder="********"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="bg-[#f3f6f9] px-3 py-2 rounded-lg w-full "
                    placeholder="********"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <Button className="!bg-[#152540] !text-white px-6 py-2 rounded-lg">
                Save Changes
              </Button>
            </div>
          </from>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="flex items-center gap-2 py-3">
          <span
            className={`px-3 py-1 ${
              activeKey == 3
                ? "bg-[#152540] text-white"
                : "bg-gray-200 text-[#3699ff]"
            }  rounded-lg`}
          >
            3
          </span>
          <div className="flex flex-col gap-0 ">
            <span
              className={`font-semibold ${
                activeKey == 3 && "text-[#152540]"
              } text-[#464e5f]`}
            >
              Make Payment
            </span>
            <span className="text-gray-400 text-xs">Add Payment Options</span>
          </div>
        </div>
      ),
      children: (
        <div>
          <div className="bg-white p-8 mx-auto rounded-xl max-w-[700px]">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Settings
            </h2>

            <div className="mb-6">
              <label className="block text-gray-600 mb-1">Language</label>
              <input
                type="text"
                value="English"
                readOnly
                className="w-full bg-gray-100 px-3 py-2 rounded-lg text-gray-800"
              />
              <p className="text-sm text-gray-400 mt-1">
                Please enter your first name.
              </p>
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 mb-1">Theme</label>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-blue-500" : "bg-gray-300"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    enabled ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>

            <div className="flex justify-end">
              <button className="bg-[#152540] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#0f1a30] transition">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="relative   mx-auto max-w-[1440px]  ">
        <button className="absolute top-24 left-7 z-10  *:!text-black" onClick={()=>navigate("/")}>
          <ArrowLeftOutlined />
        </button>
        <Tabs
          activeKey={activeKey}
          onChange={setActiveKey}
          type="card"
          items={items}
        />
      </div>
    </>
  );
};

export default AcoountComponents;
