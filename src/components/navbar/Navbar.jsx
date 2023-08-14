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
import { Dropdown, Navbar, Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";

import { BiUser } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function NavbarWithCTAButton() {
  return (
    <Navbar className=" h-18 md:h-20 md:flex justify-between">
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
          <Sidebar aria-label="">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Collapse label="MASA SANDALYE TAKIM">
                  <div className="">
                    <Sidebar.Item href="#">AHŞAP AYAKLI TAKIMLAR</Sidebar.Item>
                    <Sidebar.Item href="#">METAL AYAKLI TAKIMLAR</Sidebar.Item>
                    <Sidebar.Item href="#">
                      YUVARLAK KARE MASA TAKIMLARI
                    </Sidebar.Item>
                  </div>
                </Sidebar.Collapse>
                <Sidebar.Collapse label="MASALAR">
                  <Sidebar.Item href="">MDF MASALAR</Sidebar.Item>
                  <Sidebar.Item href="#">SUNATLAM MASALAR</Sidebar.Item>
                  <Sidebar.Item href="#">KARE-YUVARLAK MASALAR</Sidebar.Item>
                </Sidebar.Collapse>
                <Sidebar.Collapse label="SANDALYELER">
                  <Sidebar.Item href="#">AHŞAP AYAKLI SANDALYELER</Sidebar.Item>
                  <Sidebar.Item href="#">METAL AYAKLI SANDALYELER</Sidebar.Item>
                  <Sidebar.Item href="#">BAR SANDALYELERİ</Sidebar.Item>
                </Sidebar.Collapse>
                <Sidebar.Item href="/bench">
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

        <div className="hidden md:flex  whitespace-nowrap flex-shrink-0  md:text-[8px] lg:text-[10px] xl:text-[14px] navbar-item relative box transition-all ">
          <Navbar.Link active href="#" className="">
            <Dropdown inline label="MASA SANDALYE TAKIMI">
              <div className="h-64 bg-slate-100 absolute top-[22px] ">
                <Dropdown.Item>AHŞAP AYAKLI TAKIMLAR</Dropdown.Item>
                <Dropdown.Item>METAL AYAKLI TAKIMLAR</Dropdown.Item>
                <Dropdown.Item>YUVARLAK/KARE MASA TAKIMLARI</Dropdown.Item>
              </div>
            </Dropdown>
          </Navbar.Link>

          <Navbar.Link active href="/masalar">
            <Dropdown inline label="MASALAR">
              <div className="  h-64 bg-slate-100 absolute top-[22px] ">
                <Dropdown.Item>MDF MASALAR</Dropdown.Item>
                <Dropdown.Item>SUNTALAM MASALAR</Dropdown.Item>
                <Dropdown.Item>KARE YUVARLAK MASALAR</Dropdown.Item>
              </div>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link active href="/sandalyeler">
            <Dropdown inline label="SANDALYLER">
              <div className=" h-64 bg-slate-100 absolute top-[22px]">
                <Dropdown.Item>AHŞAP AYAKLI TAKIMLAR</Dropdown.Item>
                <Dropdown.Item>METAL AYAKLI TAKIMLAR</Dropdown.Item>
                <Dropdown.Item>BAR SANDALYELERİ</Dropdown.Item>
              </div>
            </Dropdown>
          </Navbar.Link>

          <Navbar.Link active href="/bench">
            <Dropdown inline label="BENCH"></Dropdown>
          </Navbar.Link>
          <Navbar.Link active href="/metal-oturma-takim">
            <Dropdown inline label="METAL OTURMA GRUPLARI"></Dropdown>
          </Navbar.Link>
          <Navbar.Link active href="/tv-ünitesi">
            <Dropdown inline label="TV ÜNİTESİ"></Dropdown>
          </Navbar.Link>
        </div>
      </Navbar.Collapse>

      {/* İCONLAR */}
      <div className="hidden md:flex gap-5  text-xl">
        <a href="/basket">
          <SlBasket className="cursor-pointer" />
        </a>
        <Link to="/myprofile">
          <BiUser className="cursor-pointer" />
        </Link>
        <AiOutlineUserAdd className="cursor-pointer" />
        <BiSearch className="cursor-pointer" />
      </div>
    </Navbar>
  );
}
