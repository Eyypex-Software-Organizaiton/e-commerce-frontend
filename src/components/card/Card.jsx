import React from "react";
import { data } from "./CardData";
import { test } from "./CardData";

const Card = () => {
  return (
    <>
      <div className="relative grid gap-4 m-4 md:grid-cols-3">
        {data.map((item, index) => (
          <div key={index} className="relative flex flex-col justify-center">
            <div className="flex-grow">
              <img
                src={item.img}
                alt={`img${index}`}
                className="rounded-md w-full h-auto"
              />
            </div>
            <div className="absolute flex flex-col ">
              
                 <h2 className="text-white ">{item.name}</h2>
              <p className="">{item.text}</p>
              <button className="bg-white">{item.button}</button>
              
             
            </div>
          </div>
        ))}
      </div>

      <div className="relative grid gap-4 m-4 md:grid-cols-2">
        {test.map((data, index) => (
          <div key={index} className="relative flex flex-col justify-center">
            <div className="flex-grow">
              <img
                src={data.img1}
                alt={`img1-${index}`}
                className="rounded-md w-full h-auto"
              />
            </div>
            <div className="absolute flex flex-col">
              <h2>{data.name1}</h2>
              <p className="">{data.text1}</p>
              <button className="bg-white">{data.button1}</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;


// import React from "react";

// import {data} from "./CardData";
// import {test} from "./CardData";

// const Card = () => {
//   return (
//     <>
//       <div className="relative grid grid-cols-3 gap-4 m-4 ">
//       {data.map((item) => (
//         <div >
//           <div className="flex justify-between ">
//             <img src={item.img} alt="img1" className="rounded-md " />
//             <div className="absolute">
//               <h2>{item.name}</h2>
//               <p className="">{item.text}</p>
//               <button className="bg-white ">{item.button}</button>
//             </div>
//           </div>
          
//         </div>
//       ))}
     
//     </div>
//    <div className="relative grid grid-cols-2 gap-4 m-4">
//     {test.map((data)=>(
//       <div >
//       <div className="flex justify-between ">
//         <img src={data.img1} alt="img1" className="rounded-md " />
//         <div className="absolute">
//           <h2>{data.name1}</h2>
//           <p className="">{data.text1}</p>
//           <button className="bg-white ">{data.button1}</button>
//         </div>
//       </div>
      
//     </div>
//     ))}
//    </div>
//     </>
  
//   );
// };

// export default Card;

