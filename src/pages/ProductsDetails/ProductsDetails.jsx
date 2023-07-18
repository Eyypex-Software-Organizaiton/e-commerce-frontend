
import ProductsCarousel from './ProductsCarousel'
import ProductsCard from './ProductsCard';
import ProductInformation from './ProductInformation';

const ProductsDetails = () => {
  return (
    <>
  
    <div className="flex gap-2  w-[100%]">
      <div className="w-[50%] m-8">
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