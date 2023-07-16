import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div className="text-center ">
        <h1 className="font-bold text-lg">BİZDEN HABERLER</h1>
        <p className="text-sm text-gray-500">
          Bültnimize Üye Olun ! Tüm İndirim ve Fırsatlardan İlk Sizin Haberiniz
          Olsun
        </p>
      </div>

      <div>
        <footer className="bg-white dark:bg-gray-900 ">
          <div className="mx-auto w-full max-w-screen-xl">
            <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                  Kurumsal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li>
                    <a href="#" className=" hover:underline">
                      Hakkımızda
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Bize Ulaşın
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                  Müşteri Hizmetleri
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li>
                    <a href="#" className="hover:underline">
                      Sıkça Sorulan Sorular
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Mesafeli Satış Sözleşmesi
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Teslimat ve İade Koşulları
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Gizlilik ve Kullanım Koşulları
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                  Ürün Grupları
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li>
                    <a href="#" className="hover:underline">
                      Sandalye
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Masa
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Bench
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                  Sosyal Medya
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-wrap">
                  <li className=" flex">
                    <BiLogoFacebook className="m-2 text-lg " />
                    <a href="#" className="hover:underline mt-1">
                      Facebook
                    </a>
                  </li>
                  <li className=" flex">
                    <AiOutlineInstagram className="m-2 text-lg" />
                    <a href="#" className="hover:underline mt-1">
                      Instagram
                    </a>
                  </li>
                  <li className=" flex">
                    <GrPinterest className="m-2 text-lg" />
                    <a href="#" className="hover:underline mt-1">
                      Pinteres
                    </a>
                  </li>
                  <li className="flex">
                    <AiFillYoutube className="m-2 text-lg" />
                    <a href="#" className="hover:underline mt-1">
                      Youtube
                    </a>
                  </li>
                </ul>
              </div> */}
              {/* <div>
                <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">
                  UYGULAMALAR
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium ">
                  <li className="flex">
                    <AiFillAndroid className="m-2 text-lg" />
                    <a href="#" className="hover:underline mt-1 ">
                      Android Uygulama
                    </a>
                  </li>
                  <li className="flex">
                    <AiFillApple className="m-2 text-lg" />
                    <a href="#" className="hover:underline mt-1">
                      App Store Uygulama
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </footer>
      </div>
      <div className="flex justify-evenly ">
        <img className="text-center" src="./assets/bankimg.png" alt="bankimg" />
      </div>
      <div className="flex justify-evenly bg-gray-300 border-gray-600 m-12">
        <p>
          {" "}
          © 2023 <span className="font-bold">mymassa.com</span> - Tüm Hakları
          Saklıdır.
        </p>
      </div>
    </div>
  );
};

export default Footer;
