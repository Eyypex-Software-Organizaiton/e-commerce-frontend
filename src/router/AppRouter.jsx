import React from "react";
import { Route, Routes } from "react-router-dom";
import BasketDetail from "../pages/basket/BasketDetail";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/basket" element={<BasketDetail />} />
      </Routes>
    </>
  );
};

export default AppRouter;
