import React from "react";
import MultiStepperAcc from "./MultiStepperAcc";
import { useState } from "react";

const MainStepper = ({setActiveTab , activeTab}) => {
  

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <MultiStepperAcc
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />
    </div>
  );
};

export default MainStepper;
