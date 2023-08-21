import { createContext } from "react";
import useAxios from "../hooks/useAxios";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
export const CardContext = createContext();

const CardContextProvider = ({ children }) => {
  const [productsCardData, setProductsCardData] = useState("");
  const [dataProduct, setDataProduct] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [basketData, setBasketData] = useState({ product: "", amount: "" });

  const { axiosWithToken, axiosPublic } = useAxios();

  const location = useLocation();
  // console.log(location.pathname);

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

  const dataFilter = {
    masalar: 1,
    sandalyeler: 5,
    bench: "bench",
    "tv-unitesi": "tv-unitesi",
    "metal-oturma-takimlari": "metal-oturma-takimlari",
  };

  const getProduct = async (slug) => {
    try {
      const { data } = await axiosPublic("product/");
      const newData = data.data.filter((item) => {

        return item.category.parent == null
          ? item.category.slug == dataFilter[slug]
          : item.category.parent == dataFilter[slug];
      });
      // console.log(dataFilter[values]);
      // console.log(dataFilter[slug]);
      setDataProduct(newData);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async () => {
    try {
      const { data } = await axiosPublic("category/");
      setDataCategory(data);
      console.log(dataCategory);
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
