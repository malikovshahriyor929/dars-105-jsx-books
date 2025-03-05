import axios from "axios";

export let useAxiosLogin = () => {
  const request = ({ url, method = "GET", params, header, body }) => {
    return axios({
      url: `${import.meta.env.VITE_SECURTY}/${url}`,
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        ...header,
      },
      params: {
        ...params,
      },
      data: { ...body },
    })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };
  return request;
};
