import React from "react";
import { SlBasket } from 'react-icons/sl';

const Funnel = () => {
  return (
    <div className="w-[285px] sm:w-[460px] md:w-[680px]  lg:w-[1000px] md:whitespace-nowrap overflow-hidden">
      <div className="flex  border-2 gap-2 ">
        <div className="flex justify-center items-center gap-2 text-5xl p-3  hidden lg:flex border-r-2">
          <SlBasket/>
        </div>

        {/* 1 */}
        <div className="flex justify-center items-center gap-2 p-3 border-r-2 w-[95px] sm:w-[140px] md:w-[220px] lg:w-[300px] h-18 text-xs md:text-lg">
          <span className=" block md:text-5xl font-semibold text-gray-600">
            1.
          </span>
          <div className="">
            <h2 className="font-medium">TESLİMAT BİLGİLERİ</h2>
            <p className="tracking-tight">Teslimat bilgileri giriniz</p>
          </div>
        </div>
        {/* 2 */}
        <div className="flex justify-center items-center gap-2 p-3 border-r-2 w-[95px] sm:w-[140px] md:w-[220px] lg:w-[300px] h-18 text-xs md:text-lg">
          <span className="block md:text-5xl font-semibold text-gray-600">
            2.
          </span>
          <div className="">
            <h2 className="font-medium">ÖDEME İŞLEMLERİ</h2>
            <p className="tracking-tight">Ödeme bilgileri giriniz</p>
          </div>
        </div>
        {/* 3 */}
        <div className="flex justify-center items-center gap-2 p-3  border-r-2 w-[95px] sm:w-[140px] md:w-[220px] lg:w-[300px] h-18 text-xs md:text-lg">
          <span className="block md:text-5xl font-semibold text-gray-600">
            3.
          </span>
          <div className="">
            <h2 className="font-medium">SİPARİŞ ONAYI</h2>
            <p className="tracking-tight">Siparişinizin Özeti</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funnel;
