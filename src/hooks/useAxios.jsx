import axios from "axios";

const useAxios = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkyMjg1ODI3LCJpYXQiOjE2OTIyNzg2MjcsImp0aSI6ImU5ODQzM2NhNGJiZDRjZDRhMjk3ZThkMmQ4NzE5ZGY3IiwidXNlcl9pZCI6NX0.gzqQTPl7yvu0qJN4UEYp1cIRTVjAkRcoRKBiZtHOAe8";
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
