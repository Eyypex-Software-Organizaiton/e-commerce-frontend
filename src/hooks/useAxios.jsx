import axios from "axios";
import { useContext } from "react";
import { CardContext } from "../context/CardContext";
import { useEffect } from "react";

const useAxios = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkyMzAyNjk5LCJpYXQiOjE2OTIyOTU0OTksImp0aSI6Ijc0ZjA3MTNmOTc2ZDQ2ODRiMThkZDdkZGNlNzI4NzQyIiwidXNlcl9pZCI6NH0.f0LdEeABXw3bwh5EcbuV7JOuqhaDoP3thfMl80Pht1o";
  // const { tokenState } = useContext(CardContext);

  const axiosPublic = axios.create({
    baseURL: "http://18.195.213.25:8000/api/",
  });

  const axiosWithToken = axios.create({
    baseURL: "http://18.195.213.25:8000/api/",
    headers: { Authorization: `Bearer ${token}` },
  });

  return { axiosWithToken, axiosPublic };
};

export default useAxios;
