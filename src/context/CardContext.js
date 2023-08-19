import { createContext } from "react";
import useAxios from "../hooks/useAxios";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
export const CardContext = createContext();

const CardContextProvider = ({ children }) => {
  const [productsCardData, setProductsCardData] = useState("");
  const [dataProduct, setDataProduct] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
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

  const dataFilter = { masalar: 1, sandalyeler: 5 };

  const getProduct = async (slug) => {
    // const slug = "sandalyeler";
    try {
      const { data } = await axiosPublic("product/");

      const newData = data.data.filter((item) => {
        // console.log(item.category.parent);
        return item.category.parent == dataFilter[slug];
      });
      console.log(newData);
      setDataProduct(newData);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async () => {
    try {
      const { data } = await axiosPublic("category/");
      setDataCategory(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(dataFilter);

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
    getCategory();
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
    dataCategory,
  };
  return <CardContext.Provider value={values}>{children}</CardContext.Provider>;
};

export default CardContextProvider;