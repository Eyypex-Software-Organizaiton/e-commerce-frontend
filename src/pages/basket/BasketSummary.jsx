import React from "react";

const BasketSummary = () => {
  return (
    <div className="max-w-[350px] ml-2 mt-2 border-2">
      <div className="px-2 pt-1">SEPET ÖZETİ</div>
      <div className="text-xs p-2 mb-5">
        <div className="flex justify-between mb-1">
          <span>Ara Toplam</span>{" "}
          <div>
            <span>1.869,00 </span>
            <span>TL</span>
          </div>
        </div>
        <div className="flex justify-between mb-1">
          <span className="">KDV</span>
          <div>
            <span>1.869,00 </span>
            <span>TL</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="mb-2">KDV Dahil</span>
          <div>
            <span>1.869,00 </span>
            <span>TL</span>
          </div>
        </div>
        <hr />
        <div className="text-xs flex my-2 justify-between">
          <span>Toplam</span>
          <div className="font-semibold">
            <span>1.869,00 </span>
            <span>TL</span>
          </div>
        </div>
        <div>
          <button className="bg-[#2C67B3] rounded-xl w-full py-2 font-semibold  text-white cursor-pointer ">
            ALIŞVERİŞİ TAMAMLA
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketSummary;
