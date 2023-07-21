import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Home from '../pages/home/Home'
import ProductsDetails from '../pages/ProductsDetails/ProductsDetails'
import ProductsList from '../pages/ProductsList/ProductsList'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path=':slug' element={<ProductsList />} />
        <Route path='/details' element={<ProductsDetails />} />
      </Routes>
    <Footer/>
    </>
    
  )
}

export default AppRouter
