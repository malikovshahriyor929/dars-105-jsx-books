import axios from "axios";

export let useAxios = () => {
  const request = ({ url, method = "GET",  params, header }) => {
    return axios({
      url: `${import.meta.env.VITE_BASE_URL}/${url}`,
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
