import React from "react";

const Adress = () => {
  return (
    <div className=" border-4 w-[600px] md:w-[800px]   lg:w-[1000px] h-[550px] overflow-hidden ">
      {/* -----------0----- */}
      <div className="m-4 ">
        <h2 className="py-1">YENİ ADRESS EKLE</h2>
        <p className="py-1">Yeni adres bilgisi ekleyin.</p>
        <p className="py-1">Örnek : Ev ya da iş</p>
      </div>
      {/* ------1-------- */}
      <div className="flex justify-around ">
        <div className=" p-2 ">
          <input
            type="text"
            id="default-input"
            placeholder="*Ad"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[420px] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className=" p-2">
          <input
            type="text"
            id="default-input"
            placeholder="*Soyad"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  w-[420px] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          />
        </div>
      </div>
      {/* ---------2---------- */}
      <div className="flex justify-between ">
        <div className="p-2">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Ülke
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[280px] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected="">Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="p-2">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Şehir
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[280px] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected="">Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="p-2">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            İlçe
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[280px] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected="">Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>
      {/* ---------3----------- */}

      <div className="flex justify-between">
        <div className="p-3">
          <input
            type="text"
            id="default-input"
            placeholder="*Ad"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[280px] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="p-3">
          <input
            type="text"
            id="default-input"
            placeholder="*Soyad"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[280px] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          />
        </div>
        <div className="p-3">
          <input
            type="text"
            id="default-input"
            placeholder="*Soyad"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[280px] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          />
        </div>
      </div>

      {/* ---------4---------- */}
      <div className="flex">
        <div className="pl-3">
          <h2>FATURA TİPİ</h2>
        </div>
        <div className="flex items-center ml-44">
          <div className="flex items-center mb-4 pr-24">
            <input
              id="default-radio-1"
              type="radio"
              defaultValue=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Default radio
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              defaultChecked=""
              id="default-radio-2"
              type="radio"
              defaultValue=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Checked state
            </label>
          </div>
        </div>
      </div>
      {/* ---------5--------- */}
      <div>
        <div className="m-2">
          <input
            type="text"
            id="default-input"
            placeholder="*Ad"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="flex justify-around">
          <div className="p-4">
            <input
              type="text"
              id="default-input"
              placeholder="*Ad"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[420px] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="p-4">
            <input
              type="text"
              id="default-input"
              placeholder="*Ad"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[420px] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-sm w-24 px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-2">KAYDET</button>
      </div>
    </div>
  );
};

export default Adress;
