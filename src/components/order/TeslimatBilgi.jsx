import React from "react";

const TeslimatBilgi = () => {
  return (
    <div className="border-2 w-[1000px] m-8">
      <div className="flex-row m-2">
        <h2 className="font-semibold text-xl">ADRES BİLGİLERİ</h2>
        <p className="text-xs ">Tercih ettiğiniz adresleri seçiniz.</p>
      </div>
      <div className="flex justify-between items-center mx-8 my-4">
        <div className="">
       
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-[450px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="TESLİMAT ADRESİ :"
            defaultValue={""}
          />
        </div>
        <div >
         
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-[450px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="FATURA ADRESİ :"
            defaultValue={""}
          />
        </div>
      </div>
      <div className="flex items-center m-2">
      <input checked id="checkbox-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" ></input>
        <p>Fatura bilgilerim teslimat bilgilerim ile aynı olsun</p>
      </div>
    </div>
  );
};

export default TeslimatBilgi;
