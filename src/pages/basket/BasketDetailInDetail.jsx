import React, { useContext, useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeleteBasketModal from "./DeleteBasketModal";
import { CardContext } from "../../context/CardContext";
import { UserContext } from "../../context/UserContext";

const BasketDetailInDetail = ({
  setBasketData,
  basketData,
  handleIncrease,
  handleDecrease,
  handleDelete,
  modalDelete,
  dataItem,
  element,
}) => {
  const { deleteBasket, postBasket } = useContext(CardContext);
  // const { tokenState } = useContext(UserContext);
  const { total_price, img, product, amount } = element;
  const taxRate = 18;
  // const taxPrice = price*amount*tax
  const taxRatePrice = (total_price * 18) / 100;

  const deleteFunction = (id, amount) => {
    // if (tokenState) {
    //   deleteBasket(id, amount);
    // }
    handleDelete(id);
  };

  return (
    <div>
      <div className="flex flex-col lg:basis-3/4 xs:basis-full border-2 ">
        <div className="flex px-4 product xs:h-[150px] md:h-full">
          <div className="mr-4 flex items-center">
            <img
              className="h-16 w-16 sm:h-28 sm:w-28 md:w-40 md:h-40 xl:w-40 xl:h-40 lg:w-28 lg:h-28  "
              src={img || "/assets/card2.jpeg"}
              alt="orderInBasket"
            />
          </div>
          <div className="flex justify-between items-center w-full relative z-0">
            <div
              onClick={() => deleteFunction(product, amount)}
              className="xs:block lg:hidden absolute top-0 right-0 cursor-pointer "
            >
              ❌
            </div>
            <div className="flex flex-col gap-12 xs:max-w-[90px] sm:max-w-[300px] lg:max-w-none">
              <p className="xl:text-sm text-xs ">
                Boston Sandalye-Gül Kurusu Babyface Kumaş- Ahşap Siyah İskelet
              </p>
              <button className="border-2 py-1 px-3 rounded-2xl  max-w-[130px] hidden lg:flex items-center  hover:bg-red-700 hover:text-white">
                <div className="mr-1  ">
                  <RiDeleteBin6Line />
                </div>
                <button
                  onClick={() => deleteFunction(product, amount)}
                  className="text-sm "
                >
                  Sepetten Sil
                </button>
              </button>
            </div>

            <div className="flex mx-2 min-w-[90px] max-w-[100px]">
              <button
                onClick={() => deleteBasket(product, 1)}
                className="border-2 p-2"
              >
                -
              </button>
              <div className="xl:w-[100px] lg:w-[75px] border-t-2 border-b-2">
                <input
                  type="text"
                  name="number"
                  id={product}
                  value={amount}
                  className="text-center w-full text-sm border-none"
                />
              </div>

              <button
                onClick={() =>
                  postBasket({
                    ...basketData,
                    product: product,
                    amount: 1,
                  })
                }
                className="border-2 p-2"
              >
                +
              </button>
            </div>
            <div className="text-right xl:text-sm lg:text-xs text-xs my-6">
              <div className="flex flex-col">
                <div>
                  <span className="line-through">{total_price}</span>
                  <span className="">TL</span>
                </div>
                <div className="xl:text-lg lg:text-sm">
                  <span className="font-bold">
                    {total_price - taxRatePrice}
                  </span>
                  <span className="font-bold">TL</span>
                </div>
              </div>
              <div className="text-sm">
                <span>+ KDV %</span>
                <span>{taxRate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketDetailInDetail;
