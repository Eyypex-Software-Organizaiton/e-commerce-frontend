import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import ProductsDetails from "../pages/ProductsDetails/ProductsDetails";
import ProductsList from "../pages/ProductsList/ProductsList";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import BasketDetail from "../pages/basket/BasketDetail";
import AhşaAyakliTakımlar from "../pages/navbar/AhşaAyakliTakımlar";
import Sandalyeler from "../pages/navbar/Sandalyeler";
import Masalar from "../pages/navbar/Masalar";
import Order from "../pages/payment/Order";
import Bench from "../pages/navbar/Bench";
import MetalOturmaTakim from "../pages/navbar/MetalOturmaTakim";
import TvÜnitesi from "../pages/navbar/TvÜnitesi";

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
        <Route path="/order" element={<Order />} />
        <Route
          path="/masa-sandalye-takimlari"
          element={<AhşaAyakliTakımlar />}
        />
        <Route path="/sandalyeler" element={<Sandalyeler />} />
        <Route path="/masalar" element={<Masalar />} />
        <Route path="/bench" element={<Bench />} />
        <Route path="/metal-oturma-takim" element={<MetalOturmaTakim />} />
        <Route path="/tv-unitesi" element={<TvÜnitesi />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
