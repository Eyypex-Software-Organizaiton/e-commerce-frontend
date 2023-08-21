import React, { useState } from "react";
// import nadidelogo from "./assets/NadideLogo.png";
import { SlBasket } from "react-icons/sl";
import { BiUser } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbars = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className=" flex flex-wrap items-center justify-between mx-auto  px-10">
        {/* LOGO */}
        <div>
          <a href="#" className="flex items-center md:w-20  lg:w-26 xl:w-40">
            <img
              src="./assets/NadideLogo.png"
              className="h-12 mr-3"
              alt="Flowbite Logo"
            />
          </a>
        </div>

        {/* //! hamurgericon button */}
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500  md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
          onClick={handleMenuToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto  `}
        >
          <div
            className="flex flex-col font-medium p-4 md:p-0 mt-4 border-2  md:border-0 md:flex-row md:mt-0 whitespace-nowrap md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:text-[10px] lg:text-[12px] xl:text-[16px]"
            id="navbar-dropdown"
          >
            <div className="relative inline-block text-left group p-4 hover:bg-gray-500 hover:text-white">
              <button
                type="button"
                className="  md:px-2 py-4 transition duration-400 ease-in-out "
              >
                <a href="/ahsap-ayakli-takimlar">Masa Sandalye Takım</a>
              </button>
              <div className="origin-top-right p-4 absolute hidden  w-60 h-40 top-[88px] z-10 shadow-lg bg-white ring-1 ring-black ring-opacity-5 group-hover:block">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    className="block  py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Ahşap Ayaklı Takımlar
                  </a>
                  <a
                    href="#"
                    className="block  py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Metal Ayaklı Takımlar
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Yuvarlak/Kare Masa Takımları
                  </a>
                </div>
              </div>
            </div>
            <div className="relative inline-block text-left group p-4 hover:bg-gray-500 hover:text-white">
              <button
                type="button"
                className="  md:px-2 py-4 transition duration-400 ease-in-out "
              >
               <a href="/masalar">Masalar</a> 
              </button>
              <div className="origin-top-right p-4 absolute hidden  w-60 h-40 top-[88px] z-10 shadow-lg bg-white ring-1 ring-black ring-opacity-5 group-hover:block">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    className="block  py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    MDF Masalar
                  </a>
                  <a
                    href="#"
                    className="block  py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Suntalam Masalar
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Yuvarlak/Kare Masalar
                  </a>
                </div>
              </div>
            </div>
            <div className="relative inline-block text-left group p-4 hover:bg-gray-500 hover:text-white">
              <button
                type="button"
                className="  md:px-2 py-4 transition duration-400 ease-in-out "
              >
               <a href="/sandalyeler">Sandalyeler</a> 
              </button>
              <div className="origin-top-right p-4 absolute hidden  w-60 h-40 top-[88px] z-10  shadow-lg bg-white ring-1 ring-black ring-opacity-5 group-hover:block">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    className="block  py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Ahşap Ayaklı Sandalyeler
                  </a>
                  <a
                    href="#"
                    className="block  py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Metal Ayaklı Sandalyeler
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Bar Sandalyelerı
                  </a>
                </div>
              </div>
            </div>
            <div className="relative inline-block text-left group p-4 hover:bg-gray-500 hover:text-white">
              <a
                href="#"
                type="button"
                className="  md:px-2 py-4 transition duration-400 ease-in-out "
              >
                Bench
              </a>
            </div>
            <div className="relative inline-block text-left group p-4 hover:bg-gray-500 hover:text-white">
              <a
                href="#"
                type="button"
                className="  md:px-2 py-4 transition duration-400 ease-in-out "
              >
                Metal Oturma Takımları
              </a>
            </div>
            <div className="relative inline-block text-left group p-4 hover:bg-gray-500 hover:text-white">
              <a
                href="#"
                type="button"
                className="  md:px-2 py-4 transition duration-400 ease-in-out "
              >
                TV Ünitesi
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:flex gap-5  lg:text-[16px] xl:text-[20px]">
          <a href="/basket">
            <SlBasket className="cursor-pointer" />
          </a>
          <a href="/myprofile">
            <BiUser className="cursor-pointer" />
          </a>
          <AiOutlineUserAdd className="cursor-pointer" />
          <BiSearch className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbars;

// import { Dropdown, Navbar, Sidebar } from "flowbite-react";

// import { BiUser } from "react-icons/bi";
// import { AiOutlineUserAdd } from "react-icons/ai";
// import { BiSearch } from "react-icons/bi";
// import { BsBasket } from "react-icons/bs";
// import { Link, useNavigate } from "react-router-dom";

// export default function NavbarWithCTAButton() {

//   const navigate = useNavigate()

//   return (
//     <Navbar className=" h-18 md:h-20 md:flex justify-between">
//       {/* LOGO */}

//       <div className="md:w-20  lg:w-40 xl:w-60 ">
//         <Link to="/">
//           <img src="./assets/NadideLogo.png" alt="" width={120} />
//         </Link>
//       </div>
//       <div className="flex md:order-2 ">
//         <Navbar.Toggle />
//       </div>
//       <Navbar.Collapse className="">
//         {/* HAMBURGER MENÜ */}
//         <div className="md:hidden">
//           <Sidebar aria-label="">
//             <Sidebar.Items>
//               <Sidebar.ItemGroup>
//                 <Sidebar.Collapse label="MASA SANDALYE TAKIM">
//                   <div className="">
//                     <Sidebar.Item href="masa_sandalye_takim">
//                       AHŞAP AYAKLI TAKIMLAR
//                     </Sidebar.Item>
//                     <Sidebar.Item href="#">METAL AYAKLI TAKIMLAR</Sidebar.Item>
//                     <Sidebar.Item href="#">
//                       YUVARLAK KARE MASA TAKIMLARI
//                     </Sidebar.Item>
//                   </div>
//                 </Sidebar.Collapse>
//                 <Sidebar.Collapse label="MASALAR">
//                   <Sidebar.Item href="masalar">
//                     MDF MASALAR
//                   </Sidebar.Item>
//                   <Sidebar.Item href="#">SUNATLAM MASALAR</Sidebar.Item>
//                   <Sidebar.Item href="#">KARE-YUVARLAK MASALAR</Sidebar.Item>
//                 </Sidebar.Collapse>
//                 <Sidebar.Collapse label="SANDALYELER">
//                   <Sidebar.Item href="sandalyeler">
//                     AHŞAP AYAKLI SANDALYELER
//                   </Sidebar.Item>
//                   <Sidebar.Item href="#">METAL AYAKLI SANDALYELER</Sidebar.Item>
//                   <Sidebar.Item href="#">BAR SANDALYELERİ</Sidebar.Item>
//                 </Sidebar.Collapse>
//                 <Sidebar.Item href="/bench">
//                   <p>BENCH</p>
//                 </Sidebar.Item>
//                 <Sidebar.Item href="#">
//                   <p>METAL OTURMA TAKIMLARI</p>
//                 </Sidebar.Item>
//                 <Sidebar.Item href="#">
//                   <p>TV ÜNİTESİ</p>
//                 </Sidebar.Item>
//               </Sidebar.ItemGroup>
//             </Sidebar.Items>
//           </Sidebar>
//         </div>

//         {/* FLEX MENÜ */}

//         <div className="hidden md:flex  whitespace-nowrap flex-shrink-0  md:text-[8px] lg:text-[10px] xl:text-[14px] navbar-item relative box transition-all ">
//           <Navbar.Link active href="#" className="">
//             <Dropdown inline label="MASA SANDALYE TAKIMI">
//               <div className="h-64 bg-slate-100 absolute top-[22px] ">
//                 <Dropdown.Item>AHŞAP AYAKLI TAKIMLAR</Dropdown.Item>
//                 <Dropdown.Item>METAL AYAKLI TAKIMLAR</Dropdown.Item>
//                 <Dropdown.Item>YUVARLAK/KARE MASA TAKIMLARI</Dropdown.Item>
//               </div>
//             </Dropdown>
//           </Navbar.Link>

//           <Navbar.Link active href="/masalar">
//             <Dropdown inline label="MASALAR">
//               <div className="  h-64 bg-slate-100 absolute top-[22px] ">
//                 <Dropdown.Item>MDF MASALAR</Dropdown.Item>
//                 <Dropdown.Item>SUNTALAM MASALAR</Dropdown.Item>
//                 <Dropdown.Item>KARE YUVARLAK MASALAR</Dropdown.Item>
//               </div>
//             </Dropdown>
//           </Navbar.Link>
//           <Navbar.Link active onClick={() => navigate("/sandalyeler")}>
//             <Dropdown inline label="SANDALYLER">
//               <div className=" h-64 bg-slate-100 absolute top-[22px]">
//                 <Dropdown.Item>AHŞAP AYAKLI TAKIMLAR</Dropdown.Item>
//                 <Dropdown.Item>METAL AYAKLI TAKIMLAR</Dropdown.Item>
//                 <Dropdown.Item>BAR SANDALYELERİ</Dropdown.Item>
//               </div>
//             </Dropdown>
//           </Navbar.Link>

//           <Navbar.Link active onClick={() => navigate("/bench")}>
//             <Dropdown inline label="BENCH"></Dropdown>
//           </Navbar.Link>
//           <Navbar.Link
//             active
//             onClick={() => navigate("/metal_oturma_takimlari")}
//           >
//             <Dropdown inline label="METAL OTURMA GRUPLARI"></Dropdown>
//           </Navbar.Link>

//           <Navbar.Link active onClick={() => navigate("/tv_unitesi")}>
//             <Dropdown inline label="TV ÜNİTESİ"></Dropdown>
//           </Navbar.Link>
//         </div>
//       </Navbar.Collapse>

//       {/* İCONLAR */}
//       <div className="hidden md:flex gap-5  text-xl relative">
//         <p className="bg-red-400 rounded-full w-4 h-4 text-center text-xs font-bold absolute bottom-[19px] left-[2px]  z-10"><span>1</span></p>
//         <Link to="/sepet">
//           <BsBasket className="cursor-pointer" />
//         </Link>
//         <Link to="/myprofile">
//           <BiUser className="cursor-pointer" />
//         </Link>
//         <AiOutlineUserAdd className="cursor-pointer" />
//         <BiSearch className="cursor-pointer" />
//       </div>
//     </Navbar>
//   );
// }
