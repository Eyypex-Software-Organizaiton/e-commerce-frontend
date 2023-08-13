import React from 'react'
import { productsListData } from '../../data/productListData/productsListData'
import ProductCard from '../../components/productCard/ProductCard'
import './ProductsList.css'
import { useParams } from 'react-router-dom'
import FilterProductCategory from '../../components/filterProductCategory/FilterProductCategory'
import { useState } from 'react'
import { useEffect } from 'react'

const ProductsList = () => {
  const { slug } = useParams()
  const [data, setData] = useState([])
  const [initialValue, setInitialValue] = useState(data)
  const [gridClass, setGridClass] = useState('grid grid-cols-2 md:grid-cols-3')
  const [activeIcon, setActiveIcon] = useState(3)
  const lengthOfData = data.length
  useEffect(() => {
    setData(productsListData[slug])
    setInitialValue(productsListData[slug])
  }, [slug])
  // sag üstteki 3lü 4 lü veya tekli listeleme fonksiyonu
  const listFunction = (x, y) => {
    setGridClass(x)
    setActiveIcon(y)
  }
  // sol üstteki filtreleme fonksiyonu
  const filterFunction = (e) => {
    const val = e.target.value
    val === 'artan' && setData(handleSortByPrice())
    val === 'azalan' && setData(handleSortByPriceReverse())
    val === 'a-z' && setData(handleSortByName())
    val === 'z-a' && setData(handleSortByNameReverse())
    val === '' && setData(initialValue)
  }
  const handleSortByPrice = () => {
    const sortedData = [...data].sort(
      (a, b) => a.discount_price - b.discount_price
    )
    return sortedData
  }
  const handleSortByPriceReverse = () => {
    const sortedData = handleSortByPrice().reverse()
    return sortedData
  }
  const handleSortByName = () => {
    const sortedData = [...data].sort((a, b) => a.title.localeCompare(b.title))
    return sortedData
  }
  const handleSortByNameReverse = () => {
    const sortedData = handleSortByName().reverse()
    return sortedData
  }
  const handleStok = (e) => {
    const filter = e.target.checked
    if (filter) {
      const sortedData = data.filter((item) => item.stok)
      setData(sortedData)
    } else {
      setData(initialValue)
    }
  }
  // const [data, setData] = useState([])
  // setData(productsListData[slug])
  // burada slug(kategori ismi olacak) ile backendend veri alacagız
  // development
  // const data = productsListData[slug]
  // END of development
  return (
    <>
      <div className='productContainer'>
        <FilterProductCategory
          listFunction={listFunction}
          filterFunction={filterFunction}
          handleStok={handleStok}
          activeIcon={activeIcon}
          lengthOfData={lengthOfData}
        />
        <div className={gridClass}>
          {data.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductsList
