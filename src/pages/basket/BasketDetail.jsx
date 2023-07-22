import React, { useState } from "react";

import BasketDetailInDetail from "./BasketDetailInDetail";
import BasketSummary from "./BasketSummary";
import { images } from "../../data/data";

const BasketDetail = () => {
  const [basketData, setBasketData] = useState(images);

  return (
    <div className="flex ">
      <div className="flex flex-col basis-3/4">
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
      <div className="basis-1/4">
        <BasketSummary />
      </div>
    </div>
  );
};

export default BasketDetail;
