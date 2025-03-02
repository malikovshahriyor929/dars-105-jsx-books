import React, { useState } from "react";

import login from "../../shared/assets/svg/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const LogIn = () => {
  //   let [data, setData] = useState([]);
  let [check, setCheck] = useState(false);

  let { reset, register, handleSubmit } = useForm();
  let navigate = useNavigate();
  let Login = async (formValue) => {
    await axios.get(`${import.meta.env.VITE_Security}/login`).then((res) =>
      res?.data?.filter((value) =>
        value.email === formValue.email && value.password === formValue.password
          ? // toast.success("you  successfully logined"),
            (setCheck(true), navigate("/"))
          : setCheck(false)
      )
    );
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <div className="bg-[#c4ab8f] flex items-center justify-center p-6 sm:p-10">
          <img src={login} alt="" />
        </div>

        <div className="flex items-center justify-center p-6 sm:p-10">
          <div className="text-center w-full max-w-sm">
            <h2 className="text-3xl font-bold mb-4">Log In</h2>
            <p className="mb-4 flex items-center gap-2">
              Do not you have an account?
              <Link
                to={"/signUp"}
                className="text-blue-500 cursor-pointer hover:underline"
              >
                Sign up
              </Link>
            </p>
            <form onSubmit={handleSubmit(Login)}>
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {check ? (
                <button
                  disabled
                  type="submit"
                  className="w-full cursor-not-allowed bg-black text-white rounded-lg py-3 hover:bg-gray-800"
                >
                  Next step
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-black text-white rounded-lg py-3 hover:bg-gray-800"
                >
                  Next step
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
