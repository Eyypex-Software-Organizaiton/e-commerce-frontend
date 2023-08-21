import axios from "axios";
import { createContext, useState } from "react";
import useAxios from "../hooks/useAxios";
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [tokenState, setTokenState] = useState("");
  const { axiosWithToken } = useAxios();
  const register = async (asd) => {
    try {
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/auth/register",
        asd
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (loginData) => {
    try {
      const { data } = await axios.post(
        `http://127.0.0.1:8000/api/auth/login`,
        loginData
      );
      setTokenState(data?.access);
      console.log(data.access);
    } catch (error) {
      console.log(error);
    }
  };

  const values = { register, login, tokenState };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
