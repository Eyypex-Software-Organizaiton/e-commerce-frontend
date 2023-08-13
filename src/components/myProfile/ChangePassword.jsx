import React from "react";

const ChangePassword = () => {
  return (
    <div className="flex flex-col mb-2 mx-10">
      <p className="text-3xl mb-4">Şifre Değiştir</p>
      <div className="gap-5 mb-3">
        <div className="flex flex-col mb-4 w-full">
          <label className="mb-2" htmlFor="">
            Eski Şifre
          </label>
          <input
            className="h-8 rounded text-sm p-4"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col mb-4 w-full">
          <label className="mb-2" htmlFor="">
            Yeni Şifre
          </label>
          <input
            className="h-8 rounded text-sm p-4"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col w-full mb-6">
          <label className="mb-2" htmlFor="">
            Şifreyi Onayla
          </label>
          <input
            className="h-8 rounded text-sm p-4"
            type="email"
            name=""
            id=""
          />
        </div>
        <div className="bg-[#2C67B3] hover:bg-[#98c2f9] text-center font-bold text-white py-2 rounded-lg cursor-pointer max-w-[200px] mx-auto">
          <button>ŞİFRE DEĞİŞTİR</button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
