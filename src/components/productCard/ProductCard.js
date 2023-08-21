import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { TbShoppingCartPlus } from "react-icons/tb";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import "./ProductCard.css";

const ProductCard = ({ product, activeIcon }) => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const handleClickCard = () => {
    navigate(`/${slug}/${product.slug}`);
  };
  return (
    <div
      className={` ${
        activeIcon === 1
          ? "flex justify-between"
          : "productCard max-w-sm relative hover:text-gray-700"
      }`}
      onClick={handleClickCard}
    >
      <div>
        <img
          className={`${
            activeIcon === 1 ? "w-[200px] " : "rounded-t-lg card-img"
          } `}
          src="/assets/card1.jpeg"
          alt="not found"
        />
        {!product.stock && (
          <div
            key="asd"
            className="absolute bottom-2 px-1.5 leading-8 bg-white"
          >
            Tükendi
          </div>
        )}
        {product.stock && (
          <div className="icons hidden absolute inset-0 items-center justify-evenly">
            <div className="icon-container">
              <TbShoppingCartPlus className="" />
            </div>
            <div className="icon-container">
              <MdOutlineFavoriteBorder />
            </div>
            <div className="icon-container">
              <BiSearch />
            </div>
          </div>
        )}
      </div>

      <div
        className={`${
          activeIcon === 1
            ? "flex justify-between gap-2 w-[850px] items-center "
            : "p-5"
        } `}
      >
        <Link to={product.category.title}>
          <h5 className="mb-2 sm:text-xl md:text-2xl font-bold tracking-tight truncate">
            {product.name}
          </h5>
        </Link>
        <div className="flex gap-x-2">
          <p className="price mb-3 font-normal text-[#616c70] line-through">
            {product.gross_price}
          </p>
          <p className="price mb-3 font-normal text-black">{product.price}</p>
        </div>
      </div>
      {product.discount_percentage !== 0 && (
        <div className="absolute top-0 right-0 px-1.5 gray-container discount">
          {product.discount_percentage}
        </div>
      )}
      {product.kdv && (
        <div className="absolute top-8 right-0 px-1.5 gray-container">
          Ücretsiz Kargo
        </div>
      )}
    </div>
  );
};

export default ProductCard;

// import React from 'react'
// import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
// import { TbShoppingCartPlus } from 'react-icons/tb'
// import { MdOutlineFavoriteBorder } from 'react-icons/md'
// import { BiSearch } from 'react-icons/bi'
// import './ProductCard.css'
// const ProductCard = ({ product }) => {
//   const location = useLocation()
//   const { id, price, discount_price, discount, shipping, img, title, stok } =
//     product
//   // const currentLocation = location.pathname
//   // console.log(discount)
//   const navigate=useNavigate()
//     const { slug } = useParams();
//   return (
//     <div
//       className="productCard max-w-sm relative hover:text-gray-700"
//       onClick={() => navigate(`/urun/${slug}/`)}
//     >
//       <Link to={title}>
//         <img
//           className="rounded-t-lg card-img"
//           src={"/assets/images/" + img}
//           alt="not found"
//         />
//         {!stok && (
//           <div
//             key="asd"
//             className="absolute bottom-2 px-1.5 leading-8 bg-white"
//           >
//             Tükendi
//           </div>
//         )}
//         {stok && (
//           <div className="icons hidden absolute inset-0 items-center justify-evenly">
//             <div className="icon-container">
//               <TbShoppingCartPlus className="" />
//             </div>
//             <div className="icon-container">
//               <MdOutlineFavoriteBorder />
//             </div>
//             <div className="icon-container">
//               <BiSearch />
//             </div>
//           </div>
//         )}
//       </Link>

//       <div className="p-5">
//         <Link to={title}>
//           <h5 className="mb-2 sm:text-xl md:text-2xl font-bold tracking-tight truncate">
//             {title}
//           </h5>
//         </Link>
//         <div className="flex gap-x-2">
//           <p className="price mb-3 font-normal text-[#616c70] line-through">
//             {price}
//           </p>
//           <p className="price mb-3 font-normal text-black">{discount_price}</p>
//         </div>
//       </div>
//       {discount !== 0 && (
//         <div className="absolute top-0 right-0 px-1.5 gray-container discount">
//           {discount}
//         </div>
//       )}
//       {shipping && (
//         <div className="absolute top-8 right-0 px-1.5 gray-container">
//           Ücretsiz Kargo
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductCard
