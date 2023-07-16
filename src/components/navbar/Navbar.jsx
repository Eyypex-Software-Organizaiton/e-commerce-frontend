import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navlink from "./Navlink";
import Button from "./Button";
import { GiHamburgerMenu } from 'react-icons/gi';


const Navbar = () => {
  const data = {
    
  }
    const [open, setOpen] = useState(false)
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between md:" >
          <img src="./assets/mymassa.png" className="md:cursor-pointer h-[70px] " />
          <div className=" absolute top-0 left-0 text-3xl cursor-pointer " onClick={()=> setOpen(!open)}>
          {/* <GiHamburgerMenu/> */}
          </div>
        </div>
       
        <ul className="md:flex hidden uppercase items-center gap-2 text-[12px] font-serif  text-slate-700 font-semibold md:bg-top ">
          <li>
            <Link href="http://" className="py-7 px-3 inline-block">
              MASA SANDALYE TAKIM
            </Link>
          </li>
          <Navlink/>
        </ul>
        <div className="md:block hidden justify-between">
          <Button />
        </div>
        {/* Mobile App */}
        <ul className={`
        md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4
        duration-500 ${open ? 'left-0' :" left-[-100%]"}
            `}>
          <li >
            <Link href="http://" className="py-7 px-3 inline-block">
              MASA SANDALYE TAKIM
            </Link>
          </li>
          <Navlink/>
          <div className="py-5">
<Button/>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
