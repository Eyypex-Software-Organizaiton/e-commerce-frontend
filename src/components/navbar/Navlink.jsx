import React from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import { useState } from "react";

const Navlink = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((item) => (
        <div className=" px-3 text-left md:cursor-pointer group hover:bg-gray-500 hover:text-white py-6 transition-all">
          
         
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== item.name ? setHeading(item.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {item.name}
              <span className="text-xl md:hidden">
                <ion-icon
                  name={`${
                    heading === item.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              {/* <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span> */}
            </h1>
            {item.submenu && (
              <div>
                <div className="absolute top-20 w-[300px] pr-7 hidden group-hover:md:block hover:md:block ">
                  <div className="py-[13px] ">
                    <div className="w-4 h-4 left-3 hidden absolute mt-2 bg-white rotate-45 "></div>
                  </div>
                  <div className="bg-white p-4 mt-[14px]">
                    {item.sublinks.map((mysublinks) => [
                      <div>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-gray-600  my-4 ">
                            <Link to={slink.link} className="hover:text-black">
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>,
                    ])}
                  </div>
                </div>
              </div>
            )}
          

          <div className={`${heading === item.name ? "md:hidden" : "hidden"}`}>
            {item.sublinks.map((slink) => (
              <div>
                <div>
                  <h1>
                    {/* {slink.Head} */}
                    <div>
                      {slink.sublink.map((slink) => (
                        <li className="py-3 pl-14">
                          <Link to={slink.link}>{slink.name}</Link>
                        </li>
                      ))}
                    </div>
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Navlink;
