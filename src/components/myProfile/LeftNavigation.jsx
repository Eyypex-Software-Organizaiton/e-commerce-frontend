import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineInbox } from "react-icons/ai";
const LeftNavigation = ({ activeTab, handleTabClick }) => {
  return (
    <>
      <div className="buton w-5/6 mx-auto justify-center my-6 basis-1/4">
        {/* Dashboard */}
        <div
          onClick={() => handleTabClick(1)}
          className="bg-gray-200 font-bold rounded-md mt-5 flex justify-start pl-4  hover:bg-gray-400 duration-100 hover:text-white cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-center self-center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <button className="m-2 mx-1 text-center">Müşteri Bilgisi</button>
        </div>
        {/* My Profile */}
        <div
          onClick={() => handleTabClick(2)}
          className="bg-gray-200 font-bold rounded-md mt-2 flex justify-start pl-4 hover:bg-gray-400 duration-100 hover:text-white cursor-pointer"
        >
          <div className="flex items-center">
            <MdOutlineLocationOn className="w-6 h-6 " />
          </div>

          <button className="m-2 mx-1 text-center">Adres</button>
        </div>
        {/* Messages */}
        <div
          onClick={() => handleTabClick(3)}
          className="bg-gray-200 font-bold rounded-md mt-2 flex justify-start pl-4 hover:bg-gray-400 duration-100 hover:text-white cursor-pointer"
        >
          <div className="flex items-center">
            <AiOutlineInbox className="w-6 h-6 " />
          </div>

          <button className="m-2 mx-1 text-center">Siparişler</button>
        </div>
        {/* Change Password */}
        <div
          onClick={() => handleTabClick(4)}
          className="bg-gray-200 font-bold rounded-md mt-2 flex justify-start pl-4 hover:bg-gray-400 duration-100 hover:text-white cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-center self-center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>

          <button className="m-2 mx-1 text-center">Şifre Değiştir</button>
        </div>
      </div>
    </>
  );
};

export default LeftNavigation;
