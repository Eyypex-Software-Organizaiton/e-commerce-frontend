import axios from "axios";

const useAxios = (tokenState) => {
  console.log(tokenState);

  const axiosPublic = axios.create({
    baseURL: "http://18.195.213.25:8000/api/",
  });

  const axiosWithToken = axios.create({
    baseURL: "http://18.195.213.25:8000/api/",
    headers: { Authorization: `Bearer ${tokenState}` },
  });

  return { axiosWithToken, axiosPublic };
};

export default useAxios;
