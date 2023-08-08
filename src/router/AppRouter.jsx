import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import ProductsDetails from "../pages/ProductsDetails/ProductsDetails";
import ProductsList from "../pages/ProductsList/ProductsList";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import BasketDetail from "../pages/basket/BasketDetail";
import AboutUs from "../pages/conditions/AboutUs";
import Communication from "../pages/conditions/Communication";
import DeliveryAndReturn from "../pages/conditions/DeliveryAndReturn";
import DistanceSelling from "../pages/conditions/DistanceSelling";
import PrivacyAndSecurity from "../pages/conditions/PrivacyAndSecurity";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<ProductsList />} />
        <Route path="/:slug" element={<ProductsDetails />} />
        <Route path="/basket" element={<BasketDetail />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/communication" element={<Communication />} />
        <Route path="/delivery" element={<DeliveryAndReturn />} />
        <Route path="/distance" element={<DistanceSelling />} />
        <Route path="/privacy" element={<PrivacyAndSecurity />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
