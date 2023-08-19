import axios from "axios";

const useAxios = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkyNDg4NjQ1LCJpYXQiOjE2OTI0ODE0NDUsImp0aSI6ImE2OWJlNzg3ZDljOTRiYWI4ZWM2ZjNkY2RhMmE5NGM1IiwidXNlcl9pZCI6NX0.WxovzbqsnYiPL98xbNBRSsEiHxTzfdFfEq8N-eQpzhY";
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
