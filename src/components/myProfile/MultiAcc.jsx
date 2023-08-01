import React from "react";
import ChangePassword from "./ChangePassword";
import UserInfo from "./UserInfo";
import Address from "./Address";
import Orders from "./Orders";

const MultiAcc = ({ activeTab, setActiveTab }) => {
  const renderStep = () => {
    switch (activeTab) {
      case 1:
        return <UserInfo />;
      case 2:
        return <Address />;
      case 3:
        return <Orders />;
      case 4:
        return <ChangePassword />;
      default:
        return null;
    }
  };

  return (
    <div className=" max-w-[55rem] basis-3/4 ">
      <main>{renderStep(activeTab)}</main>
    </div>
  );
};

export default MultiAcc;
