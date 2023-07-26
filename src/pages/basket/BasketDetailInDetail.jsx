import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeleteBasketModal from "./DeleteBasketModal";

const BasketDetailInDetail = ({ item, index, setBasketData, basketData }) => {
  const [number, setNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleDelete = (itemID) => {
    const img = basketData.filter((data) => data.id !== itemID);
    setBasketData(img);
  };
  const modalDelete = (id) => {
    const img = basketData.filter((data) => data.id !== id);
    setBasketData(img);
  };

  const handleDecrease = (e) => {
    if (number === 1) {
      setOpenModal(true);
    } else {
      setNumber(number - 1);
    }
  };
  const handleIncrease = () => {
    setNumber(number + 1);
  };

  return (
    <>
      {openModal && (
        <DeleteBasketModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalDelete={modalDelete}
          item={item}
          basketData={basketData}
        />
      )}
      <div className="flex px-4 product ">
        <div className="mr-4">
          <img className="w-40 h-40 " src={item.img} alt="orderInBasket" />
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-12 ">
            <p className="text-sm">
              Boston Sandalye-Gül Kurusu Babyface Kumaş- Ahşap Siyah İskelet
            </p>
            <button className="border-2 py-1 px-3 rounded-2xl flex max-w-[130px]  items-center  hover:bg-red-700 hover:text-white">
              <div className="mr-1 ">
                <RiDeleteBin6Line />
              </div>
              <button onClick={() => handleDelete(item.id)} className="text-sm">
                Sepetten Sil
              </button>
            </button>
          </div>

          <div className="flex">
            <button onClick={handleDecrease} className="border-2 p-2">
              -
            </button>
            <div className="w-[100px] border-t-2 border-b-2">
              <p className="text-center text-sm">{number}</p>
              <p className="text-center text-sm">adet</p>
            </div>
            <button onClick={handleIncrease} className="border-2 p-2">
              +
            </button>
          </div>
          <div className="text-right">
            <div className="flex flex-col">
              <div>
                <span className="line-through text-sm">1.999,00 </span>
                <span className="text-sm">TL</span>
              </div>
              <div className="text-lg">
                <span className="font-bold">1.869,00 </span>
                <span className="font-bold">TL</span>
              </div>
            </div>
            <div className="text-sm">
              <span>+ KDV %</span>
              <span>18</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketDetailInDetail;
