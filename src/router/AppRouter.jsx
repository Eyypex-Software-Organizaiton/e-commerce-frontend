import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Home from '../pages/home/Home'
import ProductsDetails from '../pages/ProductsDetails/ProductsDetails'

const AppRouter = () => {
  return (
    <>
    <Navbar/>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/details' element={<ProductsDetails/>}/>


    </Routes>
    <Footer/>
    </>
    
  )
}

export default AppRouter