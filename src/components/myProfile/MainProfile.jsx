import React, { useState } from "react";
import LeftNavigation from "./LeftNavigation";
import MultiAcc from "./MultiAcc";
import { Helmet } from "react-helmet";
// import AccountLeft from "./AccountLeft";

const MainProfile = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
      <Helmet>
        <title>Hesap Ayarları | Kullanıcı Profili - Nadide Home</title>
        <meta
          name="description"
          content="Hesap ayarlarınızı yönetin ve alışveriş deneyiminizi özelleştirin. Profil bilgilerinizi güncelleyin."
        />
      </Helmet>
      <div className="md:flex mt-5 xs:flex-col md:flex-row xs:w-full md:w-full lg:w-3/4 m-auto ">
        {/* <AccountLeft activeTab={activeTab} handleTabClick={handleTabClick} /> */}
        <LeftNavigation activeTab={activeTab} handleTabClick={handleTabClick} />
        <MultiAcc activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </>
  );
};

export default MainProfile;
