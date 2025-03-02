import React, { useState } from "react";

import signUp from "../../shared/assets/svg/Two factor authentication-pana 1.svg";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  let { reset, register, handleSubmit } = useForm();
  let navigate = useNavigate();

  let SignUpFn = (formValue) => {
    axios
      .post(`${import.meta.env.VITE_Security}/login`, {
        ...formValue,
        age: "",
        country: "",
        bio: "",
      })
      .then(() => {
        toast.success("you  successfully signuped");
        navigate("/");
        setCheck(true);
      })
      .catch(() => {
        toast.error("you don't successfully signuped please try later");
        setCheck(true);
      });
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Side (Image Section) */}
      <div className="hidden md:flex w-1/2 bg-[#D9C3A3] justify-center items-center p-8">
        <img
          src={signUp}
          alt="Sign Up Illustration"
          className="max-w-full h-auto"
        />
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center px-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-4">Sign up</h2>
          <div className="*:text-gray-500 mb-6 flex  gap-2">
            <p> Already have an account?</p>
            <Link to={"/logIn"}>
              <p className="text-blue-500"> Sign in</p>
            </Link>
          </div>

          <form onSubmit={handleSubmit(SignUpFn)} className="space-y-4">
            <input
              {...register("firstName")}
              type="text"
              placeholder="First name"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              {...register("lastName")}
              type="text"
              placeholder="Last name"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              {...register("phone")}
              type="tel"
              placeholder="Phone"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {!check ? (
              <button
                type="submit"
                className="w-full bg-[#111827] text-white p-3 rounded-lg"
                disabled
              >
                Next step
              </button>
            ) : (
              <button
                type="submit"
                className="w-full bg-[#111827] text-white p-3 rounded-lg"
              >
                Next step
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
