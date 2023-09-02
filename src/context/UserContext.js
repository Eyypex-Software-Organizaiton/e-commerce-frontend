import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [loginData, setLoginData] = useState({
    email: "fs@fs.com",
    password: "Aa123456.",
    kvkk: true,
    is_membership: true,
  });
  const [tokenState, setTokenState] = useState("");
  const register = async (asd) => {
    try {
      const { data } = await axiosPublic.post("auth/register", asd);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (loginData) => {
    try {
      const { data } = await axiosPublic.post(`auth/login`, loginData);
      setTokenState(data?.access);
      console.log(data.access);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    login(loginData);
  }, [loginData]);
  const { axiosPublic } = useAxios(tokenState);

  const values = { register, login, tokenState };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
