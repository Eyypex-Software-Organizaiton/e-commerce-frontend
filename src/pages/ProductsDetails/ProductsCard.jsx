import React from 'react'
import { SlBasket } from "react-icons/sl";
import { FaTruck } from "react-icons/fa";
import { Dropdown } from "flowbite-react";
const ProductsCard = () => {
  return (
    <div className="">
      <h1 className="text-2xl text-center border-b-2">
        Blanca 6231 2'li Sandalye
      </h1>
      <div>
        <p className="text-3xl">10.317,59 TL</p>
        <p>
          Stok Kodu:<span>xxxxxxxxx</span>
        </p>
        <p>
          Garanti Süresi: <span>24 Ay</span>
        </p>
        <div className="flex ">
          <img src="https://www.istikbal.com.tr/dosya/sss.gif" alt="gif" />{" "}
          <p className="text-red-600 m-2">3.375,56 TL X 9 Taksit!</p>
        </div>
        <div>
          <div className=" bg-slate-300 h-20 w-[700px] rounded-lg m-1 ">
            <p className="">Renk</p>
            <button
              type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Lacivert
            </button>
            <button
              type="button"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Vizyon
            </button>
          </div>
          <Dropdown label="Adet">
            <Dropdown.Item>1</Dropdown.Item>
            <Dropdown.Item>2</Dropdown.Item>
            <Dropdown.Item>3</Dropdown.Item>
            <Dropdown.Item>4 </Dropdown.Item>
          </Dropdown>
          <div className=" bg-slate-300 h-20 w-[700px] rounded-lg text-center flex flex-col  justify-center">
            <p className="font-semibold ">Tahmini Teslimat Süresi</p>
            <p>29 Ağustos2023-9 Eylül 2023</p>
          </div>
          <button
            type="button"
            class="text-white flex gap-1 mb-2 items-center justify-center py-2 bg-blue-700 h-12 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
          >
            Sepete Ekle <SlBasket />
          </button>
          <button
            type="button"
            class="text-white flex  items-center justify-center py-2 gap-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm h-12   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
          >
            Hemen Al <FaTruck />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsCard