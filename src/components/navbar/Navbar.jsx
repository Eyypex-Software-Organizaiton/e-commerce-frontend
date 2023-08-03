"use client";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { Button, Dropdown, Navbar, Sidebar } from "flowbite-react";
import { useState } from "react";
// import nadidehome from "./assets/NadideLogo.png";
import { BiUser } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";

export default function NavbarWithCTAButton() {
  const [open, setOpen] = useState(false);

  return (
    <Navbar className=" h-18 md:h-20 md:flex justify-between   cursor-pointer ">
      {/* LOGO */}

      <div className="md:w-20  lg:w-40 xl:w-60 ">
        <a href="/">

        <img src="./assets/NadideLogo.png" alt="" width={120} />
        </a>
         
      </div>
      <div className="flex md:order-2 ">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="">
        {/* HAMBURGER MENÜ */}
        <div className="md:hidden">
          <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Collapse label="MASA SANDALYE TAKIM">
                  <Sidebar.Item href="#">AHŞAP AYAKLI TAKIMLAR</Sidebar.Item>
                  <Sidebar.Item href="#">METAL AYAKLI TAKIMLAR</Sidebar.Item>
                  <Sidebar.Item href="#">
                    YUVARLAK KARE MASA TAKIMLARI
                  </Sidebar.Item>
                </Sidebar.Collapse>
                <Sidebar.Collapse label="MASALAR">
                  <Sidebar.Item href="#">MDF MASALAR</Sidebar.Item>
                  <Sidebar.Item href="#">SUNATLAM MASALAR</Sidebar.Item>
                  <Sidebar.Item href="#">KARE-YUVARLAK MASALAR</Sidebar.Item>
                </Sidebar.Collapse>
                <Sidebar.Collapse label="SANDALYELER">
                  <Sidebar.Item href="#">AHŞAP AYAKLI SANDALYELER</Sidebar.Item>
                  <Sidebar.Item href="#">METAL AYAKLI SANDALYELER</Sidebar.Item>
                  <Sidebar.Item href="#">BAR SANDALYELERİ</Sidebar.Item>
                </Sidebar.Collapse>
                <Sidebar.Item href="#">
                  <p>BENCH</p>
                </Sidebar.Item>
                <Sidebar.Item href="#">
                  <p>METAL OTURMA TAKIMLARI</p>
                </Sidebar.Item>
                <Sidebar.Item href="#">
                  <p>TV ÜNİTESİ</p>
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>

        {/* FLEX MENÜ */}

        <div className="hidden md:flex  whitespace-nowrap flex-shrink-0  md:text-[8px] lg:text-[10px] xl:text-[14px]  relative box">
          <Navbar.Link active href="#">
            <Dropdown
              inline
              label="MASA SANDALYE TAKIMI"
              // onClick={() => open(!setOpen)}
            >
              <div className=" h-64 bg-slate-500 absolute top-9   ">
                <Dropdown.Item>AHŞAP AYAKLI TAKIMLAR</Dropdown.Item>
                <Dropdown.Item>METAL AYAKLI TAKIMLAR</Dropdown.Item>
                <Dropdown.Item>YUVARLAK/KARE MASA TAKIMLARI</Dropdown.Item>
              </div>
            </Dropdown>
          </Navbar.Link>

          <Navbar.Link active href="#">
            <Dropdown inline label="MASALAR">
              <div className="  h-64 bg-slate-500 absolute top-9  ">
                <Dropdown.Item>MDF MASALAR</Dropdown.Item>
                <Dropdown.Item>SUNTALAM MASALAR</Dropdown.Item>
                <Dropdown.Item>KARE YUVARLAK MASALAR</Dropdown.Item>
              </div>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link active href="#">
            <Dropdown inline label="SANDALYLER">
              <div className=" h-64 bg-slate-500 absolute top-9 ">
                <Dropdown.Item>AHŞAP AYAKLI TAKIMLAR</Dropdown.Item>
                <Dropdown.Item>METAL AYAKLI TAKIMLAR</Dropdown.Item>
                <Dropdown.Item>BAR SANDALYELERİ</Dropdown.Item>
              </div>
            </Dropdown>
          </Navbar.Link>

          <Navbar.Link active href="#">
            <Dropdown inline label="BENCH"></Dropdown>
          </Navbar.Link>
          <Navbar.Link active href="#">
            <Dropdown inline label="METAL OTURMA GRUPLARI"></Dropdown>
          </Navbar.Link>
          <Navbar.Link active href="#">
            <Dropdown inline label="TV ÜNİTESİ"></Dropdown>
          </Navbar.Link>
        </div>
      </Navbar.Collapse>

      {/* İCONLAR */}
      <div className="hidden md:flex gap-2 cursor-pointer">
        <a href="/basket">

        <SlBasket />
        </a>
        <BiUser />
        <AiOutlineUserAdd />
      </div>
    </Navbar>
  );
}
