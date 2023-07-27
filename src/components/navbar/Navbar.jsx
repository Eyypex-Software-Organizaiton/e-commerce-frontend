import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navlink from "./Navlink";
import Button from "./Button";

import { links } from "./Mylinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white ">
      <div className="flex items-center font-medium justify-around ">
        <div className=" p-8 z-50 md:w-auto w-full flex justify-between">
          <div className=''>
            <img
            src="./assets/NadideLogo.png"
            alt="logo"
            className=" cursor-pointer h-[80px] "
          />
          </div>
          
          <div className="text-3xl md:hidden " onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>

        <ul className="md:flex hidden uppercase items-center gap-2 text-[12px] font-serif  text-slate-700 font-semibold md:bg-top z-50 ">
          <Navlink />
        </ul>
        <div className=" justify-between">
          <Button />
        </div>

        {/* Mobile App */}
        <ul
          className={`
          md:hidden bg-white fixed w-[400px] top-0 overflow-y-auto bottom-0 py-24 pl-4
           ${open ? "left-0 z-40" : "left-[-100%] "}
          `}
        >
          <Navlink />
          <div className="py-5 ">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
