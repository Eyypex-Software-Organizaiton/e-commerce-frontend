import React from "react";
import { SlBasket } from "react-icons/sl";
import { FaTruck } from "react-icons/fa";

const ProductsCard = () => {
  return (
    <div className="">
      <h1 className="text-2xl text-center border-b-2">
        Blanca 6231 2'li Sandalye
      </h1>
      <div>
        <div className="flex flex-col text-center m-2">
          <div className="flex mr-2">
            <p className="text-red-600 text-3xl line-through">50.317,59 TL</p>
            <p className="text-3xl">10.317,59 TL</p>
          </div>

          <select
            id="small"
            class="block  text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 w-20"
          >
            <option selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <p>
            Garanti Süresi: <span>24 Ay</span>
          </p>
        </div>

        <div className="flex justify-evenly m-2 ">
          <img src="https://www.istikbal.com.tr/dosya/sss.gif" alt="gif" />{" "}
          <p className="text-red-600 m-2">3.375,56 TL X 9 Taksit!</p>
        </div>
        <div>
          <div className="border-gray-300 bg-slate-300 text-black inline-block absolute rounded-lg">
        
          </div>
          <div className=" bg-slate-100 h-20 w-[75%] text-center m-auto rounded-lg ">
            <p className="font-bold">Renk</p>
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

          <div className=" bg-slate-100  h-20 w-[75%] m-auto rounded-lg text-center flex flex-col  justify-center">
            <p className="font-semibold ">Tahmini Teslimat Süresi</p>
            <p>29 Ağustos2023-9 Eylül 2023</p>
          </div>
          <button
            type="button"
            class="text-white flex gap-1 mb-4 mt-4 items-center justify-center py-2 bg-blue-700 h-16 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[50px] text-sm  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[75%] m-auto"
          >
            Sepete Ekle <SlBasket />
          </button>
          <button
            type="button"
            class="text-white flex  items-center justify-center py-2 gap-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[50px] text-sm h-16   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[75%] m-auto"
          >
            Hemen Al <FaTruck />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
