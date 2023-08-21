import { Dropdown, Navbar, Sidebar } from "flowbite-react";
import { BiUser } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsBasket } from "react-icons/bs";
import { useContext } from "react";
import { CardContext } from "../../context/CardContext";

export default function NavbarWithCTAButton() {
  const { basketData } = useContext(CardContext);
  const navigate = useNavigate();
  const { slug } = useParams();

  return (
    <Navbar className=" h-18 md:h-20 md:flex justify-between">
      {/* LOGO */}

      <div className="md:w-20  lg:w-40 xl:w-60 ">
        <Link to="/">
          <img src="./assets/NadideLogo.png" alt="" width={120} />
        </Link>
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
                    <Sidebar.Item href="masa_sandalye_takim">
                      AHŞAP AYAKLI TAKIMLAR
                    </Sidebar.Item>
                    <Sidebar.Item href="#">METAL AYAKLI TAKIMLAR</Sidebar.Item>
                    <Sidebar.Item href="#">
                      YUVARLAK KARE MASA TAKIMLARI
                    </Sidebar.Item>
                  </div>
                </Sidebar.Collapse>
                <Sidebar.Collapse label="MASALAR">
                  <Sidebar.Item href="masalar">MDF MASALAR</Sidebar.Item>
                  <Sidebar.Item href="#">SUNATLAM MASALAR</Sidebar.Item>
                  <Sidebar.Item href="#">KARE-YUVARLAK MASALAR</Sidebar.Item>
                </Sidebar.Collapse>
                <Sidebar.Collapse label="SANDALYELER">
                  <Sidebar.Item href="sandalyeler">
                    AHŞAP AYAKLI SANDALYELER
                  </Sidebar.Item>
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
          <Navbar.Link active onClick={() => navigate("/masa-sandalye-takim")}>
            <Dropdown inline label="MASA SANDALYE TAKIMI">
              <div className="h-64 bg-slate-100 absolute top-[22px] ">
                <Dropdown.Item>AHŞAP AYAKLI TAKIMLAR</Dropdown.Item>
                <Dropdown.Item>METAL AYAKLI TAKIMLAR</Dropdown.Item>
                <Dropdown.Item>YUVARLAK/KARE MASA TAKIMLARI</Dropdown.Item>
              </div>
            </Dropdown>
          </Navbar.Link>

          <Navbar.Link active onClick={() => navigate("/masalar")}>
            <Dropdown inline label="MASALAR">
              <div className="  h-64 bg-slate-100 absolute top-[22px] ">
                <Dropdown.Item>MDF MASALAR</Dropdown.Item>
                <Dropdown.Item>SUNTALAM MASALAR</Dropdown.Item>
                <Dropdown.Item
                  onClick={() => navigate("/kare-yuvarlak-masalar")}
                >
                  KARE YUVARLAK MASALAR
                </Dropdown.Item>
              </div>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link active onClick={() => navigate("/sandalyeler")}>
            <Dropdown inline label="SANDALYLER">
              <div className=" h-64 bg-slate-100 absolute top-[22px]">
                <Dropdown.Item>AHŞAP AYAKLI TAKIMLAR</Dropdown.Item>
                <Dropdown.Item>METAL AYAKLI TAKIMLAR</Dropdown.Item>
                <Dropdown.Item>BAR SANDALYELERİ</Dropdown.Item>
              </div>
            </Dropdown>
          </Navbar.Link>

          <Navbar.Link active onClick={() => navigate("/bench")}>
            <Dropdown inline label="BENCH"></Dropdown>
          </Navbar.Link>
          <Navbar.Link
            active
            onClick={() => navigate("/metal-oturma-takimlari")}
          >
            <Dropdown inline label="METAL OTURMA GRUPLARI"></Dropdown>
          </Navbar.Link>

          <Navbar.Link active onClick={() => navigate("/tv-unitesi")}>
            <Dropdown inline label="TV ÜNİTESİ"></Dropdown>
          </Navbar.Link>
        </div>
      </Navbar.Collapse>

      {/* İCONLAR */}
      <div className="hidden md:flex gap-5  text-xl relative">
        {basketData?.basket_products?.length > 0 && (
          <p className="bg-red-400 rounded-full w-4 h-4 text-center text-xs font-bold absolute bottom-[19px] left-[2px]  z-10">
            <span>{basketData.basket_products.length}</span>
          </p>
        )}

        <Link to="/sepet">
          <BsBasket className="cursor-pointer" />
        </Link>
        <Link to="/myprofile">
          <BiUser className="cursor-pointer" />
        </Link>
        <AiOutlineUserAdd className="cursor-pointer" />
        <BiSearch className="cursor-pointer" />
      </div>
    </Navbar>
  );
}
