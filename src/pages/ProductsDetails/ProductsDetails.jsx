import ProductInformation from "../../components/productdetails/ProductInformation";
import ProductsCard from "../../components/productdetails/ProductsCard";
import ProductsCarousel from "../../components/productdetails/ProductsCarousel";


const ProductsDetails = () => {
  return (
    <>
  
    <div className="md:flex items-center   gap-2  w-[100%]">
      <div className="w-[60%] m-8 ">
        <ProductsCarousel />
      </div>
      <div className="w-[40%]">
   <ProductsCard/>
      </div>
    </div> 
    <ProductInformation/>
     </>
  );
}

export default ProductsDetails