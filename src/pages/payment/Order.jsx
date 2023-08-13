import React from "react";
import Funnel from "../../components/order/Funnel";
import Adress from "../../components/order/OrderAddress";
import SepetÖzeti from "../../components/order/SepetÖzeti";
import SiparişÖzeti from "../../components/order/SiparişÖzeti";
import Ödemeİşlemler from "../../components/order/OdemeIslemler";
import TeslimatBilgi from "../../components/order/TeslimatBilgi";
import MainStepper from "./MainStepper";
import { useState } from "react";


const Order = () => {
  const [activeTab, setActiveTab] = useState(1);

  
  return (
    <div>
            <Funnel activeTab={activeTab}/>
            
            <MainStepper setActiveTab={setActiveTab} activeTab={activeTab}/>
      
      {/* <div className="m-8 flex-row md:flex ">
        <div className="flex-row">
          <div className="p-2">
          </div>
          <div className="p-2">
            <Adress />
          </div>
        </div>

        <div className="p-2">
          <SepetÖzeti />
        </div>
      </div> */}
    {/* <div><Ödemeİşlemler/></div> */}
      {/* <div><TeslimatBilgi/></div>  */}
      {/* <div><SiparişÖzeti/></div> */}
    </div>
  );
};

export default Order;
