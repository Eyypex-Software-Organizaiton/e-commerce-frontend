import React, { useState } from "react";
import LeftNavigation from "./LeftNavigation";
import MultiAcc from "./MultiAcc";
// import AccountLeft from "./AccountLeft";

const MainProfile = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="md:flex mt-5 xs:flex-col md:flex-row xs:w-full md:w-full lg:w-3/4 m-auto ">
      {/* <AccountLeft activeTab={activeTab} handleTabClick={handleTabClick} /> */}
      <LeftNavigation activeTab={activeTab} handleTabClick={handleTabClick} />
      <MultiAcc activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default MainProfile;
