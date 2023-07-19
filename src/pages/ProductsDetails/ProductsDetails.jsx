import React from 'react'
import ProductsCarousel from './ProductsCarousel'
import ProductsCard from './ProductsCard';
import ProductInformation from './ProductInformation';

const ProductsDetails = () => {
  return (
    <>
  
    <div className="flex gap-3">
      <div className="w-[50%]">
        <ProductsCarousel />
      </div>
      <div className="w-[50%]">
   <ProductsCard/>
      </div>
    </div> 
    <ProductInformation/>
     </>
  );
}

export default ProductsDetails
