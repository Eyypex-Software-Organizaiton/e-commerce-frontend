import React from "react";

const UserInfo = () => {
  return (
    <div className="flex flex-col mb-2 mx-10">
      <p className="text-3xl mb-4">Müşteri Bilgisi</p>
      <div>
        <div className="sm:flex xs:block gap-5 mb-3">
          <div className="flex flex-col  w-full">
            <label className="mb-2" htmlFor="">
              İsim
            </label>
            <input
              className="h-8 rounded text-sm p-4"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-2" htmlFor="">
              Soyisim
            </label>
            <input
              className="h-8 rounded text-sm p-4"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="sm:flex xs:block gap-5">
          <div className="flex flex-col w-full">
            <label className="mb-2" htmlFor="">
              E-posta
            </label>
            <input
              className="h-8 rounded text-sm p-4"
              type="email"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-2" htmlFor="">
              Telefon
            </label>
            <input
              className="h-8 rounded text-sm p-4"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
