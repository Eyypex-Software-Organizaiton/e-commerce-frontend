import axios from "axios";
import { useContext } from "react";
import { CardContext } from "../context/CardContext";
import { useEffect } from "react";

const useAxios = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxODgxNzE2LCJpYXQiOjE2OTE4NzQ1MTYsImp0aSI6ImYzYTliYzI2MjFlMDQzNTQ5M2E0MmIzYjY5NjJkOWMwIiwidXNlcl9pZCI6OX0.0z67JXnFSrTxgEpOL9cc4suZXZFJPvjwjwTNGj9qeNg";
  // const { tokenState } = useContext(CardContext);

  const axiosPublic = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
  });

  const axiosWithToken = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    headers: { Authorization: `Bearer ${token}` },
  });

  return { axiosWithToken, axiosPublic };
};

export default useAxios;
