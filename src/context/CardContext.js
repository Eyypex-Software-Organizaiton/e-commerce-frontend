import { createContext } from "react";
import useAxios from "../hooks/useAxios";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
export const CardContext = createContext();

const CardContextProvider = ({ children }) => {
  const [productsCardData, setProductsCardData] = useState("");
  const [dataProduct, setDataProduct] = useState([]);
  const [basketData, setBasketData] = useState({ product: "", amount: "" });
  const { axiosWithToken, axiosPublic } = useAxios();

  const getBasket = async () => {
    try {
      const { data } = await axiosWithToken("basket/");

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const postBasket = async (basketData) => {
    try {
      const { data } = await axiosWithToken.post("basket/", basketData);
      console.log(data);
      // setBasketData({...data, id:data.id,amount:data. })
      getBasket();
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async () => {
    try {
      const { data } = await axiosPublic("product/");
      setDataProduct(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getIdCardProduct = async (id) => {
    try {
      const { data } = await axiosPublic(`product/${id}`);
      setProductsCardData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBasket();
    getProduct();
    // postBasket(id, amount);
  }, []);

  const values = {
    getBasket,
    getProduct,
    dataProduct,
    setDataProduct,
    postBasket,
    getIdCardProduct,
    productsCardData,
    basketData,
  };
  return <CardContext.Provider value={values}>{children}</CardContext.Provider>;
};

export default CardContextProvider;
