import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import { useAxiosLogin } from "../../useAxiosLogin";

export const signUpMutation = () => {
  let navigate = useNavigate();
  let myAxios = useAxiosLogin();
  return useMutation({
    mutationKey: "Auth",
    mutationFn: (data) =>
      myAxios({
        url: "api/auth/sign-up",
        method: "POST",
        body: data,
      }),
    onSuccess: (data) => {
      // console.log(data);
      // navigate("/verify");
      notification.error({ message: "you can't sign up please try later" });
    },
    onError: (data) => {
      navigate("/signUp");
      notification.error({ message: data.message });
    },
  });
};
export const verifyMutation = () => {
  let navigate = useNavigate();
  let myAxios = useAxiosLogin();
  return useMutation({
    mutationKey: "verify",
    mutationFn: (data) =>
      myAxios({
        url: "api/auth/verify",
        method: "POST",
        body: data,
      }),
    onSuccess: (res) => {
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("userdata", res.data.data);
      notification.success({ message: "you successfully resigtered" });
      navigate("/");
    },
    onError: (data) => {
      notification.error({ message: data?.message });
    },
  });
};

export const LoginMutation = () => {
  let navigate = useNavigate();
  let myAxios = useAxiosLogin();
  return useMutation({
    mutationKey: "login",
    mutationFn: (data) =>
      myAxios({
        url: "api/auth/sign-in",
        method: "POST",
        body: data,
      }),
    // console.log(data),

    onSuccess: (res) => {
      const token = res?.data?.token;
      const userdata = res?.data;
      notification.success({ message: res.message });
      localStorage.setItem("token", token);
      localStorage.setItem("userdata", JSON.stringify(userdata));
      navigate("/");
    },

    onError: (data) => {
      notification.error({ message: data?.message });
      navigate("/login");
      localStorage.clear();
    },
  });
};

export const EditMutation = () => {
  let navigate = useNavigate();
  let myAxios = useAxiosLogin();
  return useMutation({
    mutationKey: "edit",
    mutationFn: (data) =>
      myAxios({
        url: "api/auth/edit",
        method: "POST",
        body: data,
      }),
    onSuccess: (res) => {
      const userdata = res?.data;
      localStorage.setItem("userdata", JSON.stringify(userdata));
      notification.success({ message: res.message });
    },
  });
};
