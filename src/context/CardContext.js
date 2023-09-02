import { createContext } from "react";
import useAxios from "../hooks/useAxios";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
export const CardContext = createContext();

const CardContextProvider = ({ children }) => {
  const [productsCardData, setProductsCardData] = useState("");
  const [dataProduct, setDataProduct] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [basketData, setBasketData] = useState(
    JSON.parse(localStorage?.getItem("localData")) || {
      created_at: "",
      deleted_at: null,
      id: 0,
      is_active: false,
      is_deleted: false,
      owner: 0,
      total_price: "",
      basket_products: [],
    }
  );

  console.log(basketData);
  const { tokenState } = useContext(UserContext);
  const { axiosWithToken, axiosPublic } = useAxios(tokenState);

  //* Sepetten Veri Çekme
  const getBasket = async () => {
    try {
      const { data } = await axiosWithToken("basket/");
      setBasketData(data);
      console.log(basketData);
    } catch (error) {
      console.log(error);
    }
  };

  //? Sepete Gönderme

  const postBasket = async (basketData) => {
    try {
      await axiosWithToken.post("basket/", basketData);
      getBasket();
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //! Sepetten Veri Silme
  const deleteBasket = async (product, amount) => {
    console.log(basketData.amount, basketData.product);
    try {
      await axiosWithToken.delete("basket/", {
        data: { product: product, amount: amount },
      });
      getBasket();
      // console.log(data);
    } catch (error) {
      console.error(error);
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
    productsCardData,
    basketData,
    dataCategory,
    deleteBasket,
    setBasketData,
  };
  return <CardContext.Provider value={values}>{children}</CardContext.Provider>;
};

export default CardContextProvider;
