import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navlink from "./Navlink";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { links } from "./Mylinks";

const Navbar = () => {
  const data = [
    {
      name: "masa sandalye",
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: "MDF MASALAR", link: "/" },
            { name: "SUNTALAM MASALAR", link: "/" },
            { name: "KARE / YUVARLAK MASALAR", link: "/" },
          ],
        },
      ],
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <img
          src="./assets/mymassa.png"
          className="md:cursor-pointer h-[60px] "
        />
        <div
          className=" absolute top-0 left-0 text-3xl cursor-pointer "
          onClick={() => setOpen(!open)}
        >
          {/* <GiHamburgerMenu /> */}
        </div>

        <ul className="md:flex  uppercase items-center gap-2 text-[12px] font-serif  text-slate-700 font-semibold md:bg-top z-50 ">
          <Navlink />
        </ul>
        <div className="md:block hidden justify-between">
          <Button />
        </div>
        {/* Mobile App */}
        <ul
          className={`
        md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : " left-[-100%]"}
            `}
        >
          <li>
            <Link href="http://" className="py-7 px-3 inline-block">
              MASA SANDALYE TAKIM
            </Link>
          </li>
          <Navlink />
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
