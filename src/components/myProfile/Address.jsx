import React, { useState } from "react";

const Address = () => {
  const [profileAddress, setProfileAddress] = useState(false);
  return (
    <div className="text-3xl mx-10">
      {!profileAddress ? (
        <div className="flex flex-col gap-20 ">
          <p className="text-center mt-10 ">
            Kayıtlı bir adres bulunmamaktadır!
          </p>
          <button className="text-lg bg-[#114B96] mx-auto rounded-lg py-2 px-4 text-white max-w-[200px] hover:bg-[#2C67B3]">
            Yeni Adres Ekle
          </button>
        </div>
      ) : (
        <p>Adres</p>
      )}
    </div>
  );
};

export default Address;
