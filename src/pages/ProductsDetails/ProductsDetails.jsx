// import ProductInformation from "../../components/productdetails/ProductInformation";
// import ProductsCard from "../../components/productdetails/ProductsCard";
// import ProductsCarousel from "../../components/productdetails/ProductsCarousel";


// const ProductsDetails = () => {
//   return (
//     <>
  
//     <div className="md:flex  gap-2  w-[100%] ">
//       <div className="w-[60%] m-8">
//         <ProductsCarousel />
//       </div>
//       <div className="w-[40%]">
//    <ProductsCard/>
//       </div>
//     </div> 
//     <ProductInformation/>
//      </>
//   );
// }

// export default ProductsDetails


import ProductInformation from "../../components/productdetails/ProductInformation";
import ProductsCard from "../../components/productdetails/ProductsCard";
import ProductsCarousel from "../../components/productdetails/ProductsCarousel";


const ProductsDetails = () => {

  
  return (
    <>
      <div className="lg:flex  w-full mb-10">
        <div className="lg:w-[60%]  w-full m-8 flex">
          <ProductsCarousel />
          
        </div>
        <div className="lg:w-[40%] w-full">
          <ProductsCard />
        </div>
      </div>
      <div className="lg:w-[60%] w-full mb-10">
        <ProductInformation />
      </div>
    </>
  );
}

export default ProductsDetails