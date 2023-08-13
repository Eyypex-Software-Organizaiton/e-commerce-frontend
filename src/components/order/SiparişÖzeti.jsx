import { Dropdown } from 'flowbite-react'
import React from 'react'

const SiparişÖzeti = () => {
  return (
    <div>
         <div className="flex items-center w-[50%]  ">
        <Dropdown
          label="Toplam"
          placement="top"
          className=" w-full mx-auto"
          color="black"
        >
          <Dropdown.Item className="flex justify-center bg-gray-200 w-full mx-auto  ">
            <div className=" w-full">
              <div className="px-2 pt-1 ">SEPET ÖZETİ</div>
              <div className="text-xs p-2 mb-5 w-full">
                <div className="flex justify-between mb-1 ">
                  <span>Ara Toplam</span>
                  <div className="font-bold">
                    {/* <span>{total} </span> */}
                    <span>TL</span>
                  </div>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="">KDV</span>
                  <div className="font-bold">
                    {/* <span>{taxRatePrice} </span> */}
                    <span>TL</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="mb-2">KDV Dahil</span>
                  <div className="font-bold">
                    {/* <span>{totalPrice}</span> */}
                    <span>TL</span>
                  </div>
                </div>
                <hr />
                <div className="text-xs flex my-2 justify-between">
                  <span>Toplam</span>
                  <div className="font-bold">
                    {/* <span>{totalPrice} </span> */}
                    <span>TL</span>
                  </div>
                </div>
              </div>
            </div>
          </Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  )
}

export default SiparişÖzeti