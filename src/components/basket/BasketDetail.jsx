import React from "react";

import BasketDetailInDetail from "./BasketDetailInDetail";

const BasketDetail = () => {
  const images = [
    {
      img: "https://static.ticimax.cloud/39282/Uploads/UrunResimleri/thumb/boston-sandalye-gul-kurusu-babyface-ku-41-e59.jpg",
    },
    {
      img: "https://static.ticimax.cloud/39282/Uploads/UrunResimleri/buyuk/milano-mdf-yemek-masasi---mutfak-masas-4-f408.jpg?gt=638251636426627742",
    },
  ];
  return (
    <>
      <div className="flex flex-col ">
        <p className="pl-2 mb-4">SEPET DETAYI</p>
        {images.map((item, i) => (
          <BasketDetailInDetail key={i} item={item} />
        ))}
      </div>
    </>
  );
};

export default BasketDetail;
