import React, { useState } from "react";

import BasketDetailInDetail from "./BasketDetailInDetail";
import BasketSummary from "./BasketSummary";
import { images } from "../../data/data";

const BasketDetail = () => {
  const [basketData, setBasketData] = useState(images);

  return (
    <>
      <div className="flex flex-col ">
        <p className="pl-2 mb-4">SEPET DETAYI</p>
        {basketData.map((item, i) => (
          <BasketDetailInDetail
            key={i}
            item={item}
            basketData={basketData}
            setBasketData={setBasketData}
          />
        ))}
      </div>
      <div>
        <BasketSummary />
      </div>
    </>
  );
};

export default BasketDetail;
