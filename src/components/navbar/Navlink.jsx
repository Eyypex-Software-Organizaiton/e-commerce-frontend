import React from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

const Navlink = () => {
//   const links = [
//     {
//       name: "MASA SANDALYE TAKIM",
//       submenu: true,
//       sublinks: [
//         {
         
//           sublink: [
//             { name: "AHŞAP AYAKLI TAKIMLAR", link: "/" },
//             { name: "METAL AYAKLI TAKIMLAR", link: "/" },
//             { name: "YUVARLAK / KARE MASA TAKIMLARI", link: "/" },
           
//           ],
//         },
//       ],
//     },
//     { name: "MASALAR" ,   submenu: true,
//     sublinks: [
//       {
        
//         sublink: [
//           { name: "MDF MASALAR", link: "/" },
//           { name: "SUNTALAM MASALAR", link: "/" },
//           { name: "KARE / YUVARLAK MASALAR", link: "/" },
          
//         ],
//       },
//     ], },
//     { name: "SANDALYELER" ,    submenu: true,
//     sublinks: [
//       {
        
//         sublink: [
//           { name: "AHŞAP AYAKLI SANDALYELER", link: "/" },
//           { name: "METAL AYAKLI SANDALYELER", link: "/" },
//           { name: "BAR SANDALYELERİ", link: "/" },
          
//         ],
//       },
//     ],},
//     { name: "BENCH" },
//     { name: "METAL OTURMA TAKIMLARI" },
//     { name: "TV ÜNİTESİ" },
//   ];

  return (
    <>
      {links.map((item) => (
        
          <div className=" px-3 text-left md:cursor-pointer group hover:bg-gray-500 py-4">
            <h1 className="py-7  ">{item.name}</h1>
            {item.submenu && (
              <div>
                <div className="absolute top-20 pr-8  hidden group-hover:block hover:block ">
                    <div className="py-[13px] ">
                        <div className="w-4 h-4 left-3 hidden absolute mt-2 bg-white rotate-45 "></div>

                    </div>
                  <div className="bg-white p-3.5 ">
                    {item.sublinks.map((mysublinks) => [
                      <div>
                        <h1 className="text-lg font-semibold ">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-gray-600 my-2.5 ">
                            <Link
                              to={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ])}
                  </div>
                </div>
              </div>
            )}
          </div>
        
      ))}
    </>
  );
};

export default Navlink;
