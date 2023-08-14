import { createContext } from "react";
import useAxios from "../hooks/useAxios";
import { useState } from "react";
import axios from "axios";
export const CardContext = createContext();

const CardContextProvider = ({ children }) => {
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

  const getBasket = async () => {
    try {
      const { data } = await axiosWithToken("basket/");

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  

  const values = { register, getBasket, login, tokenState, setTokenState };
  return <CardContext.Provider value={values}>{children}</CardContext.Provider>;
};

export default CardContextProvider;
