import axios from "axios";

const useAxios = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkyNTA1Mzg1LCJpYXQiOjE2OTI0OTgxODUsImp0aSI6IjY2NzI2OTQ3MTM1OTQ0ZDhhNzdhYmUwYTgyYzFmOTExIiwidXNlcl9pZCI6NX0.pTg-T6JxZClu6v5cK5-qQMap-hj_O1DRkUM1r0yvhRk";
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
