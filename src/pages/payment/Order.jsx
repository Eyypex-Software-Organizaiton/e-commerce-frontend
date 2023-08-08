import React from 'react'
import Funnel from '../../components/order/Funnel'
import Adress from '../../components/order/Adress'
import SepetÖzeti from '../../components/order/SepetÖzeti'
import Ödemeİşlemler from '../../components/order/Ödemeİşlemler'
import TeslimatBilgi from '../../components/order/TeslimatBilgi'

const Order = () => {
  return (
    <div>
        <div className="m-8 flex">
      <div className="flex-row">
        <div className="p-2">
          <Funnel />
        </div>
        <div className="p-2">
          <Adress />
        </div>
      </div>

      <div className="p-2 ">
        <SepetÖzeti />
      </div>
    </div>
      <div>
      <Ödemeİşlemler/>
      </div>
      <div>
        <TeslimatBilgi/>
      </div>
    </div>
  )
}

export default Order