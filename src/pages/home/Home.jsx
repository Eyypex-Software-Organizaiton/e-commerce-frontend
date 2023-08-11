import React from "react";
import HeaderCarousel from "../../components/headerCarousel/HeaderCarousel";
import Card from "../../components/card/Card";
import HeaderSearch from "../../components/headerSearch/HeaderSearch";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Nadide Home | Şıklığı Evlerinize Taşıyoruz</title>
        <meta
          name="description"
          content="Nadide Home ile evinizin zarif dokusunu yansıtan mobilyaları keşfedin. Masa, sandalye, TV üniteleri ve daha fazlası."
        />
      </Helmet>
      <HeaderCarousel />
      <Card />
      <HeaderSearch />
    </>
  );
};

export default Home;
