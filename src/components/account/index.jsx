import React, { useState } from "react";
import { Button, Form, Input, Switch, Tabs } from "antd";
import { ArrowLeftOutlined, CameraOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useQueryHandler } from "../../hooks/useQueryHandler";
import { EditMutation } from "../../hooks/useQueryHandler/useMutation";

const AcoountComponents = () => {
  const [activeKey, setActiveKey] = useState("1");
  let [check, setCheck] = useState(false);
  const [enabled, setEnabled] = useState(true);
  let navigate = useNavigate();
  let { mutate, isPending } = EditMutation();

  let Submit = (formValue) => {
    console.log(formValue);
    mutate(formValue);
  };
  let ChangeImaga = () => {
    let token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("image", file);

    axios({
      url: `${import.meta.env.VITE_BASE_URL}/api/auth/edit-image`,
      data: formData,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setImage(res.data?.data?.image),
        localStorage.setItem("image", res.data?.data?.image);
    });
  };

  let ChangePassword = (formValue) => {
    console.log(formValue);
  };
  let localData = JSON.parse(localStorage.getItem("userdata"));

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
                  <label htmlFor="image">
                    <img
                      src={
                        !localData?.image
                          ? "https://e7.pngegg.com/pngimages/753/432/png-clipart-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service.png"
                          : localData?.image
                      }
                      alt="Profile"
                      className="w-44 h-44 border-[0.1px] rounded-full object-cover "
                    />
                  </label>
                  <input className="hidden" type="file" id="image" />
                  <button
                    id="image"
                    className="absolute bottom-0 right-0 bg-gray-200 p-1 px-2 rounded-full shadow-md"
                  >
                    <CameraOutlined className="text-lg" />
                  </button>
                </div>
              </div>

              <Form
                onFinish={Submit}
                initialValues={{
                  first_name: localData?.first_name,
                  last_name: localData?.last_name,
                  email: localData?.email,
                  address: localData?.address,
                }}
                className="w-3/4 max-[726px]:w-full px-6 max-[320px]:px-0"
              >
                <h2 className="text-2xl font-semibold mb-4">My Profile</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col w-full">
                    <label className="block text-gray-600 mb-1">
                      First Name
                    </label>
                    <Form.Item
                      name="first_name"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your first_name!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="John"
                        className="!bg-[#f3f6f9] !px-3 !py-2 !rounded-lg !w-full"
                      />
                    </Form.Item>
                    <label className="text-[12px] text-[#b5b5c3] opacity-80 ">
                      Please enter your first name.
                    </label>
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="block text-gray-600 mb-1">
                      Last Name
                    </label>

                    <Form.Item
                      name="last_name"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your last_name!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Wick"
                        className="!bg-[#f3f6f9] !px-3 !py-2 !rounded-lg !w-full"
                      />
                    </Form.Item>
                    <label className="text-[12px] text-[#b5b5c3] opacity-80 ">
                      Please enter your last name.
                    </label>
                  </div>
                  <div className="flex items-center max-[500px]:flex-col gap-6">
                    <div className="flex flex-col w-full">
                      <label className="block text-gray-600 mb-1">Phone</label>

                      <Form.Item
                        name="address"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your address!",
                          },
                        ]}
                      >
                        <Input
                          placeholder="tashkent"
                          className="!bg-[#f3f6f9] !px-3 !py-2 !rounded-lg !w-full"
                        />
                      </Form.Item>
                      <label className="text-[12px] text-[#b5b5c3] opacity-80 ">
                        Please enter your address.
                      </label>
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="block text-gray-600 mb-1">Email</label>

                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your email!",
                          },
                        ]}
                      >
                        <Input
                          placeholder="john.wick@reeves.com"
                          className="!bg-[#f3f6f9] !px-3 !py-2 !rounded-lg !w-full"
                        />
                      </Form.Item>
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
              </Form>
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
        <div className="w-[90%] max-w-[1440px] !h-full flex  !items-center justify-center !m-auto">
          <Form
            onFinish={ChangePassword}
            className="!bg-white !p-8 !mx-10  !h-full !mt-10 !my-auto  rounded-lg  "
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Change Or Recover Your Password
            </h2>
            <div className="space-y-4">
              <div>
                <p className="block text-gray-600 mb-1">Current Password</p>
                <Form.Item
                  name="current_password"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your current_password!",
                    },
                  ]}
                >
                  <Input.Password
                    className="!bg-[#f3f6f9] !px-3 !py-2 !rounded-lg !w-full "
                    placeholder="********"
                  />
                </Form.Item>
              </div>
              <div className="grid grid-cols-1 w-full sm:grid-cols-2 gap-4">
                <div>
                  <p className="block text-gray-600 mb-1">New Password</p>
                  <Form.Item
                    name="new_password"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your new_password!",
                      },
                    ]}
                  >
                    <Input.Password
                      className="!bg-[#f3f6f9] !px-3 !py-2 !rounded-lg !w-full "
                      placeholder="********"
                    />
                  </Form.Item>
                </div>
                <div>
                  <p className="block text-gray-600 mb-1">Confirm Password</p>
                  <Form.Item
                    name="confirm_password"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your confirm_password!",
                      },
                    ]}
                  >
                    <Input.Password
                      className="!bg-[#f3f6f9] !px-3 !py-2 !rounded-lg !w-full "
                      placeholder="********"
                    />
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <Button
                htmlType="submit"
                className="!bg-[#152540] !text-white px-6 py-2 rounded-lg"
              >
                Save Changes
              </Button>
            </div>
          </Form>
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
        <button
          className="absolute top-24 left-7 z-10  *:!text-black"
          onClick={() => navigate("/")}
        >
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
