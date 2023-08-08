import React from "react";
import { IoMdArrowDropup } from "react-icons/io";

const SepetÖzeti = () => {
  return (
    <div className="border-2 sm:w-[460px]  md:w-[240px] lg:w-[360px] h-[340px] overflow-hidden ">
      <h2 className="pl-2 pt-2">SEPET ÖZETİ</h2>
      <div className="flex justify-between m-2">
        <div className="flex items-center">
          <IoMdArrowDropup />
          <p>Sepetteki Ürünler</p>
        </div>
        <p>düzenle</p>
      </div>
      <hr />
      <div className="m-2">
        <div className="flex justify-between">
          <p>Ara Toplam</p>
          <p>20.010.20 TL</p>
        </div>
        <div className="flex justify-between">
          <p>KDV</p>
          <p>20.010.20 TL</p>
        </div>
        <div className="flex justify-between">
          <p>KDV Dahil</p>
          <p>20.010.20 TL</p>
        </div>
      </div>
      <hr />
      <div className="flex justify-between m-2">
        <p>Toplam</p>
        <p>20.010.20 TL</p>
      </div>
      <div className="flex items-center justify-center">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-2xl text-sm w-64 px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-2">ÖDEME İŞLEMLERİ</button>
      </div>
      <div className="border-1 w-16 bg-green-300 text-center mx-64 my-4 ">
        <p className="text-white">SecureD  </p>
      </div>
    </div>
  );
};

export default SepetÖzeti;
