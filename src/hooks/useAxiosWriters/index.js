import axios from "axios";

export let useAxiosWriters = () => {
  const request = ({ url, method = "GET", params, header }) => {
    return axios({
      url: `${import.meta.env.VITE_WRITERS}/${url}`,
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
        ...header,
      },
      params: {
        ...params,
      },
    })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };
  return request;
};
