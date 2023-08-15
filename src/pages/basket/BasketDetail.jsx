import React, { useState } from "react";
import { PiWarningCircleFill } from "react-icons/pi";
import BasketDetailInDetail from "./BasketDetailInDetail";
import BasketSummary from "./BasketSummary";
import { images } from "../../data/data";
import BasketSummaryFixed from "./BasketSummaryFixed";
import DeleteBasketModal from "./DeleteBasketModal";
import { useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { CardContext } from "../../context/CardContext";

const BasketDetail = () => {
  // const [localBasket, setLocalBasket] = useState({
  //   id: "",
  //   total_price: "",
  //   basket_products: [{}],
  // });
  // localStorage.setItem("user", userID)  //! Burası sepete ekle dendiğinde
  // const [loginState, setLoginState] = useState(
  //   JSON.parse(localStorage.setItem("userInfo")) || ""
  // ); //! Login durumunda yapılacak Local
  const [basketData, setBasketData] = useState(images);
  const [openModal, setOpenModal] = useState(false);
  const [dataItem] = basketData.map((item) => item);

  // const getBasket = async () => {
  //   try {
  //     const BASE_URL_BASKET = `http://127.0.0.1:8000/api/basket/`;
  //     const { data } = await axios.get(BASE_URL_BASKET);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const [loginData, setLoginData] = useState({
    email: "fs@fs.com",
    password: "Aa123456.",
    kvkk: true,
    is_membership: true,
  });

  const { register, getBasket, login } = useContext(CardContext);

  useEffect(() => {
    // register(loginData);
    login(loginData);
    getBasket();
  }, []);

  const handleDelete = (id) => {
    const newProducts = basketData.filter((data) => data.id !== id);
    setBasketData(newProducts);
  };
  const modalDelete = (id) => {
    const newProducts = basketData.filter((data) => data.id !== id);
    setBasketData(newProducts);
  };

  const handleDecrease = (id) => {
    // if (amount === 1) {
    //   setOpenModal(true);
    //   console.log(openModal);
    // }
    const newProducts = basketData.map((item, i) => {
      if (item.id === id) {
        if (item.amount - 1 !== 0) return { ...item, amount: item.amount - 1 };
      }
      if (item.amount === 1 && item.id === id) {
        setOpenModal(true);
        console.log(openModal);
      }

      return item;
    });
    setBasketData(newProducts);
    console.log(newProducts);
  };
  const handleIncrease = (id) => {
    const newProducts = basketData.map((item) => {
      return item.id === id
        ? { ...item, amount: Number(item.amount) + 1 }
        : item;
    });
    setBasketData(newProducts);
  };

  return (
    <>
      <Helmet>
        <title>Sepetim | Güvenli Alışveriş - Nadide Home</title>
        <meta
          name="description"
          content="Seçtiğiniz mobilyaları sepetinize ekleyin ve evinizi Nadide Home ile yeniden şekillendirin."
        />
      </Helmet>

      <div className="flex flex-col sm:container mx-auto my-6 ">
        <p className="pl-2 mb-4">SEPET DETAYI</p>
        <div className="xs:basis-0 lg:hidden">
          <BasketSummaryFixed basketData={basketData} />
        </div>

        {basketData.length !== 0 ? (
          <div className="flex ">
            <div className="lg:basis-3/4">
              {basketData?.map((element, i) => (
                <>
                  {openModal && (
                    <DeleteBasketModal
                      openModal={openModal}
                      setOpenModal={setOpenModal}
                      modalDelete={modalDelete}
                      dataItem={dataItem}
                      basketData={basketData}
                      element={element}
                    />
                  )}
                  <BasketDetailInDetail
                    element={element}
                    dataItem={dataItem}
                    key={i}
                    basketData={basketData}
                    setBasketData={setBasketData}
                    handleDelete={handleDelete}
                    handleIncrease={handleIncrease}
                    handleDecrease={handleDecrease}
                    modalDelete={modalDelete}
                    setOpenModal={setOpenModal}
                  />
                </>
              ))}
            </div>
            <div className="lg:basis-1/4 md:basis-0 hidden lg:block ">
              <BasketSummary basketData={basketData} />
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center border-2 mx-auto gap-7 w-[92%] h-56 mt-6">
            <div>
              <PiWarningCircleFill className="w-20 h-20 text-yellow-300" />
            </div>
            <p>Alışveriş sepetinde ürün bulunmamaktadır !</p>
          </div>
        )}
      </div>
    </>
  );
};

export default BasketDetail;
