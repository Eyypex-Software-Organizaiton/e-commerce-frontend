import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Home from '../pages/home/Home'
import ProductsDetails from '../pages/ProductsDetails/ProductsDetails'
import ProductsList from '../pages/ProductsList/ProductsList'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'
import BasketDetail from '../pages/basket/BasketDetail'
import MasaSandalyeTakim from '../pages/navbar/MasaSandalyeTakim'
import Masalar from '../pages/navbar/Masalar'
import Order from '../pages/payment/Order'

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/category/:slug' element={<ProductsList />} />
        <Route path='/:slug' element={<ProductsDetails />} />
        <Route path='/basket' element={<BasketDetail />} />
        <Route path='/order' element={<Order/>}/>
        <Route path='/masa-sandalye-takimlari' element={<MasaSandalyeTakim />} />
        <Route path='/masalar' element={<Masalar />} />

    </Routes>
    <Footer/>
    </>
  )
}

export default AppRouter
