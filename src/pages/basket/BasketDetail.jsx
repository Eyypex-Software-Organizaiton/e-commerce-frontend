import React, { useState } from "react";
import { PiWarningCircleFill } from "react-icons/pi";
import BasketDetailInDetail from "./BasketDetailInDetail";
import BasketSummary from "./BasketSummary";
import { images } from "../../data/data";
import BasketSummaryFixed from "./BasketSummaryFixed";
import DeleteBasketModal from "./DeleteBasketModal";
import MyProfile from "../myprofile/MyProfile";

const BasketDetail = () => {
  const [basketData, setBasketData] = useState(images);
  const [openModal, setOpenModal] = useState(false);
  const [dataItem] = basketData.map((item) => item);

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
    <div className="flex flex-col sm:container mx-auto my-6 ">
      {/* <>
        <MyProfile />
      </> */}
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
          <div className="lg:basis-1/4 md:basis-0 xs:hidden lg:block ">
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
  );
};

export default BasketDetail;
