import React from "react";
import { productsListData } from "../../data/productListData/productsListData";
import ProductCard from "../../components/productCard/ProductCard";
import "./ProductsList.css";
import { useParams } from "react-router-dom";
import FilterProductCategory from "../../components/filterProductCategory/FilterProductCategory";
import { useState } from "react";
import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import { useContext } from "react";
import { CardContext } from "../../context/CardContext";

const ProductsList = () => {
  const { getProduct, dataProduct, setDataProduct } = useContext(CardContext);
  const { slug } = useParams();

  const [gridClass, setGridClass] = useState("grid grid-cols-2 md:grid-cols-3");
  const [activeIcon, setActiveIcon] = useState(3);
  const lengthOfData = dataProduct.length;
  const [initialValue, setInitialValue] = useState(dataProduct);

  useEffect(() => {
    setDataProduct(productsListData[slug]);
    setInitialValue(productsListData[slug]);
    getProduct();
  }, [slug]);
  // console.log(data);
  // sag üstteki 3lü 4 lü veya tekli listeleme fonksiyonu
  const listFunction = (x, y) => {
    setGridClass(x);
    setActiveIcon(y);
  };
  // sol üstteki filtreleme fonksiyonu

  const filterFunction = (e) => {
    const val = e.target.value;
    val === "artan" && setDataProduct(handleSortByPrice());
    val === "azalan" && setDataProduct(handleSortByPriceReverse());
    val === "a-z" && setDataProduct(handleSortByName());
    val === "z-a" && setDataProduct(handleSortByNameReverse());
    val === "" && setDataProduct(initialValue);
  };
  const handleSortByPrice = () => {
    const sortedData = [...dataProduct].sort(
      (a, b) => a.discount_price - b.discount_price
    );
    return sortedData;
  };
  const handleSortByPriceReverse = () => {
    const sortedData = handleSortByPrice().reverse();
    return sortedData;
  };
  const handleSortByName = () => {
    const sortedData = [...dataProduct].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    return sortedData;
  };
  const handleSortByNameReverse = () => {
    const sortedData = handleSortByName().reverse();
    return sortedData;
  };
  const handleStok = (e) => {
    const filter = e.target.checked;
    if (filter) {
      const sortedData = dataProduct.filter((item) => item.stok);
      setDataProduct(sortedData);
    } else {
      setDataProduct(initialValue);
    }
  };
  // const [data, setData] = useState([])
  // setData(productsListData[slug])
  // burada slug(kategori ismi olacak) ile backendend veri alacagız
  // development
  // const data = productsListData[slug]
  // END of development
  return (
    <>
      <div className="productContainer">
        <FilterProductCategory
          listFunction={listFunction}
          filterFunction={filterFunction}
          handleStok={handleStok}
          activeIcon={activeIcon}
          lengthOfData={lengthOfData}
        />
        <div
          className={`${
            activeIcon === 1 ? "flex flex-col w-full gap-4" : gridClass
          }`}
        >
          {dataProduct.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              activeIcon={activeIcon}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsList;
