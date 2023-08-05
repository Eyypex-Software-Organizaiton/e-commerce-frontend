import React from 'react'
// import kart from '../assets/kart.png'

const Ödemeİşlemler = () => {
  return (
    <>
     <div className='border-2 w-[1000px] m-8'>
        <div>
            <h2 className='m-2 pl-6 text-2xl tracking-wide font-semibold text-gray-500'>ÖDEME SEÇENEKLERİ</h2>
            <p className='border-r-2 border-t-2 w-64 h-12 flex items-center font-semibold justify-center overflow-hidden whitespace-nowrap '>KREDİ/BANKA KARTI</p>
            <hr />
        </div>
        <div className='flex'>
          <div>
     <div className='m-4'>
        <div className=" pb-10 pt-4">
          <input
            type="text"
            id="default-input"
            placeholder="*Ad"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[420px] p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="  ">
          <input
            type="text"
            id="default-input"
            placeholder="*Soyad"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-[420px] p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        </div>
        <div className='flex '>
        <div className="p-2 pr-8">
         
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-28 p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected="">*AY</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>
        </div>
        <div className="p-2 pr-8">
          
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-28 p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected="">*YIL</option>
            <option >1 </option>
            <option >2</option>
            <option >3</option>
            <option >4</option>
          </select>
        </div>
        <div className="p-2">
         
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-28 p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected="">CVC</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        </div>
          </div>
        
         <div className='m-auto'>
            <img src='./assets/kart.png' alt="" width={400} height={400} />
        </div>
    </div>
       
        </div>
     
    </>
   
  )
}

export default Ödemeİşlemler