import React from "react";

const Card = () => {
  return (
    <div>
      <div className="flex m-2 cursor-pointer">
        <div className="p-4 ">
          <img className="rounded-lg" src="./assets/card1.jpg" alt="" />
        </div>
        <div className="p-4">
          
          <img className="rounded-lg" src="./assets/card2.jpg" alt="" />
        </div>
        <div className="p-4">
          <img className="rounded-lg" src="./assets/card3.jpg" alt="" />
        </div>
      </div>

      <div className="flex m-2 cursor-pointer ">
        <div className="p-2">
          <img className="rounded-lg" src="./assets/card4.jpg" alt="" />
        </div>
        <div className="p-2">
          <img className="rounded-lg" src="./assets/card5.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
