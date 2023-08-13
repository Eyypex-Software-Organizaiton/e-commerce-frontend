import React from "react";
import { AiOutlineSmallDash, AiOutlineUserAdd } from "react-icons/ai";

const BasketSummary = ({ basketData }) => {
  const totalPrice = basketData
    .reduce((accumulator, item) => {
      return accumulator + item.price * item.amount;
    }, 0)
    .toFixed(2);

  const formattedPriceString = totalPrice.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedPriceNumber = parseFloat(
    formattedPriceString.replace(",", ".")
  );

  console.log(formattedPriceNumber);

  const taxRatePrice = Number(
    basketData
      .reduce((accumulator, item) => {
        return accumulator + (item.price * item.amount * item.taxRate) / 100;
      }, 0)
      .toFixed(2)
      .replace(",", ".")
  );

  console.log(taxRatePrice);
  const total = totalPrice - taxRatePrice;
  console.log(total);

  return (
    <div className="max-w-[300px] ml-2 border-2">
      <div className="px-2 pt-1">SEPET ÖZETİ</div>
      <div className="text-xs p-2 mb-5">
        <div className="flex justify-between mb-1 ">
          <span>Ara Toplam</span>{" "}
          <div className="font-bold">
            <span>{total} </span>
            <span>TL</span>
          </div>
        </div>
        <div className="flex justify-between mb-1">
          <span className="">KDV</span>
          <div className="font-bold">
            <span>{taxRatePrice} </span>
            <span>TL</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="mb-2">KDV Dahil</span>
          <div className="font-bold">
            <span>{totalPrice} </span>
            <span>TL</span>
          </div>
        </div>
        <hr />
        <div className="text-xs flex my-2 justify-between">
          <span>Toplam</span>
          <div className="font-bold text-lg">
            <span>{totalPrice}</span>
            <span>TL</span>
          </div>
        </div>
        <div>
          <button className="bg-[#114B96]  rounded-full w-full py-3 font-semibold   text-white cursor-pointer hover:bg-[#2C67B3] ">
            ALIŞVERİŞİ TAMAMLA
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketSummary;
