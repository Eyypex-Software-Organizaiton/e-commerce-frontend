"use client";
import React from "react";
import { Dropdown } from "flowbite-react";

const BasketSummaryFixed = ({ basketData }) => {
  // const totalPrice = basketData
  //   .reduce((accumulator, item) => {
  //     return accumulator + item.price * item.amount;
  //   }, 0)
  //   .toFixed(2)
  //   .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  //   .replace(".", ".");
  const totalPrice = basketData.reduce((accumulator, item) => {
    return accumulator + item.price * item.amount;
  }, 0);

  const formattedPriceString = totalPrice.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedPriceNumber = parseFloat(
    formattedPriceString.replace(",", ".")
  );

  console.log(formattedPriceNumber); // Örnek olarak, ekrana 1234.56 şeklinde bir çıktı alırız.

  const taxRatePrice = Number(
    basketData
      .reduce((accumulator, item) => {
        return accumulator + (item.price * item.amount * item.taxRate) / 100;
      }, 0)
      .toFixed(2)
      .replace(",", ".")
  );
  // console.log(formattedPrice);
  console.log(taxRatePrice);
  // .toFixed(2)
  // .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  // .replace(".", ".");
  // const { amount, price, taxRate } = dataItem;

  // const taxRatePrice = (price * amount * taxRate) / 100;
  return (
    <div className=" flex justify-between sm:container w-full fixed bottom-0 bg-white z-20 mx-auto ">
      <div className="flex items-center w-[50%]   ">
        <Dropdown
          label={
            <span className="w-[150px] text-left text-lg">
              <span className="text-xs"> Toplam</span> <br />
              {totalPrice} TL
            </span>
          }
          placement="top"
          className=" w-full mx-auto "
          color="black"
        >
          <Dropdown.Item className="flex justify-center bg-gray-200 w-full mx-auto  ">
            <div className=" w-full">
              <div className="px-2 pt-1 ">SEPET ÖZETİ</div>
              <div className="text-xs p-2 mb-5 w-full">
                <div className="flex justify-between mb-1 ">
                  <span>Ara Toplam</span>
                  <div className="font-bold">
                    {/* <span>{total} </span> */}
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
                    <span>{totalPrice}</span>
                    <span>TL</span>
                  </div>
                </div>
                <hr />
                <div className="text-xs flex my-2 justify-between">
                  <span>Toplam</span>
                  <div className="font-bold">
                    <span>{totalPrice} </span>
                    <span>TL</span>
                  </div>
                </div>
              </div>
            </div>
          </Dropdown.Item>
        </Dropdown>
      </div>

      <div className="w-[50%] bg-white flex items-center">
        <button className="bg-[#114B96] hover:bg-[#2C67B3] w-full rounded-full  py-2 font-semibold  text-white cursor-pointer ">
          ALIŞVERİŞİ TAMAMLA
        </button>
      </div>
    </div>
  );
};

export default BasketSummaryFixed;
// import React, { useState } from "react";

// const DropdownMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const items = ["Item 1"];

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleItemClick = (item) => {
//     console.log(`Selected item: ${item}`);
//     // Burada seçili elemanı istediğiniz şekilde kullanabilirsiniz.
//   };

//   return (
//     <div className="dropdown">
//       <button onClick={toggleDropdown} className="dropdown-toggle">
//         {isOpen ? "▲" : "▼"} Dropdown
//       </button>
//       {isOpen && (
//         <ul className="dropdown-menu">
//           {items.map((item, index) => (
//             <li key={index} onClick={() => handleItemClick(item)}>
//               {item}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default DropdownMenu;
