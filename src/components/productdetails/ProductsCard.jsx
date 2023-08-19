import React, { useEffect } from "react";
import { SlBasket } from "react-icons/sl";
import { FaTruck } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

const ProductsCard = () => {
    const { axiosWithToken, axiosPublic } = useAxios();
    const [produc, setProduc] = useState([])
    const [amountValue, setAmountValue] = useState(1);
      const handleAmountChange = (e) => {
        setAmountValue(Number(e.target.value));
      };
      
//     const location=useLocation()
//  const slugData = location.pathname
//  console.log(slugData);
const {slug}=useParams()
console.log(slug);

const getProductInfo = async () => {

  try {
    const { data } = await axiosPublic("product/");
 const newData=data.data.filter((item)=>{
 return item.slug == slug;

 })
 setProduc(newData)
    console.log(newData);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
getProductInfo()
}, [])

console.log(produc);

  return (
    <>
      {produc.map((item, i) => (
        <div className="flex flex-col mx-12 ">
          <h1 className="text-2xl  mb-4 font-semibold">{item.name}</h1>
          <hr />
          <div className="flex  flex-col text-center ">
            <div className="flex my-2 ">
              <div>
                <p className="text-red-600 text-xl text-left line-through">
                  {item.gross_price} TL
                </p>
                <p className="text-3xl">{item.price} TL</p>
              </div>
              <p className="bg-[#e5e9ee] text-blue-600 rounded-full w-28 text-center items-center flex justify-center h-14 font-semibold ml-10">
                %{(item.discount_percentage).toFixed(2)} İNDİRİM
              </p>
            </div>
            <hr />
            <div className="flex  my-3  ">
              <img
                src="https://www.istikbal.com.tr/dosya/sss.gif"
                alt="gif"
                width={90}
                height={16}
              />{" "}
              <p className="text-red-600 m-2 ml-5 ">3.375,56 TL X 9 Taksit!</p>
            </div>
            <hr />
            <div>
              <div className="flex my-3">
                <p>
                  Renk: <span className="pl-4">Mavi</span>
                </p>
              </div>
              <hr />
              <div className="flex  items-center gap-2 my-3">
                <p>Adet:</p>
                <select
                  onChange={handleAmountChange}
                  value={amountValue}
                  id="small"
                  class="block pl-4 ml-3  text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 w-20 text-center"
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
              </div>
              <hr />
              <div className="flex my-3">
                <p>
                  Garanti Süresi:<span className="pl-4">24 Ay</span>
                </p>
              </div>
              <hr />
            </div>
          </div>

          <div>
            <div className="border-gray-300 bg-slate-300 text-black inline-block absolute rounded-lg"></div>

            <div className=" bg-slate-100 my-2  h-20 w-[100%] m-auto rounded-lg text-center flex flex-col  justify-center">
              <p className="font-semibold ">Tahmini Teslimat Süresi</p>
              <p>29 Ağustos2023-9 Eylül 2023</p>
            </div>
            <button
              type="button"
              class="text-white flex gap-1 mb-4 mt-4 items-center justify-center py-2 bg-blue-700 h-16 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[50px] text-sm  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[100%] m-auto"
            >
              Sepete Ekle <SlBasket />
            </button>
            <button
              type="button"
              class="text-white flex  items-center justify-center py-2 gap-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[50px] text-sm h-16   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[100%] m-auto"
            >
              Hemen Al <FaTruck />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductsCard;
