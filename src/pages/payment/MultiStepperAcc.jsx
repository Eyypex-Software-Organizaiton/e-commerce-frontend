import React from "react";
import OrderAddress from "../../components/order/OrderAddress";
// import OdemeIslemler from "../../components/order/OdemeIslemler";
import TeslimatBilgi from "../../components/order/TeslimatBilgi";
import OdemeIslemler from "../../components/order/OdemeIslemler";

const MultiStepperAcc = ({ activeTab, handleTabClick }) => {
  const renderStep = () => {
    switch (activeTab) {
      case 1:
        return <OrderAddress handleTabClick={handleTabClick} />;
      case 2:
        return <TeslimatBilgi handleTabClick={handleTabClick} />;
      case 3:
        return <OdemeIslemler handleTabClick={handleTabClick} />;
      default:
        return null;
    }
  };
  return (
    <div>
      <main>{renderStep(activeTab)}</main>
    </div>
  );
};

export default MultiStepperAcc;
