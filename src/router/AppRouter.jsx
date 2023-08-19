import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import ProductsDetails from "../pages/ProductsDetails/ProductsDetails";
import ProductsList from "../pages/ProductsList/ProductsList";
import AboutUs from "../pages/conditions/AboutUs";
import Communication from "../pages/conditions/Communication";
import DeliveryAndReturn from "../pages/conditions/DeliveryAndReturn";
import DistanceSelling from "../pages/conditions/DistanceSelling";
import PrivacyAndSecurity from "../pages/conditions/PrivacyAndSecurity";
import MainProfile from "../components/myProfile/MainProfile";
import PageNotFound from "../pages/404/PageNotFound";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import BasketDetail from "../pages/basket/BasketDetail";
import AhşaAyakliTakımlar from "../pages/navbar/AhşaAyakliTakımlar";
import Sandalyeler from "../pages/navbar/Sandalyeler";
import Masalar from "../pages/navbar/Masalar";
import Order from "../pages/payment/Order";
import Bench from "../pages/navbar/Bench";
import MetalOturmaTakim from "../pages/navbar/MetalOturmaTakim";
import TvÜnitesi from "../pages/navbar/TvÜnitesi";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/communication" element={<Communication />} />
        <Route path="/delivery" element={<DeliveryAndReturn />} />
        <Route path="/distance" element={<DistanceSelling />} />
        <Route path="/privacy" element={<PrivacyAndSecurity />} />
        <Route path="/myprofile" element={<MainProfile />} />
        {/* <Route path="/kategori" element={<ProductsList />} /> */}
        <Route path="/:slug" element={<ProductsList />} />
        <Route path="/:slug/:slug" element={<ProductsDetails />} />

        <Route path="/sepet" element={<BasketDetail />} />
        <Route path="/siparis" element={<Order />} />
        {/* <Route path="/profil" element={<Order />} />*/}
        <Route path="/uye-ol" element={<Register />} />
        <Route path="/uye-girisi" element={<Login />} />
        {/* 
        <Route path="/hakkimizda" element={<AboutUs />} />
        <Route path="/iletisim" element={<Communication />} />
        <Route
          path="/teslimat-ve-iade-kosullari"
          element={<DeliveryAndReturn />}
        />
        <Route
          path="/mesafeli-satis-sozlesmesi"
          element={<DistanceSelling />}
        />
        <Route
          path="/gizlilik-ve-kullanim-kosullari"
          element={<PrivacyAndSecurity />}
        />
        <Route
          path="/gizlilik-ve-kullanim-kosullari"
          element={<PrivacyAndSecurity />}
        /> */}
        <Route path="*" element={<PageNotFound />} />

        {/* <Route
          path="/masa-sandalye-takimlari"
          element={<AhşaAyakliTakımlar />}
        />
        <Route path="/sandalyeler" element={<Sandalyeler />} />
        <Route path="/masalar" element={<Masalar />} />
        <Route path="/bench" element={<Bench />} />
        <Route path="/metal-oturma-takim" element={<MetalOturmaTakim />} />
        <Route path="/tv-unitesi" element={<TvÜnitesi />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
