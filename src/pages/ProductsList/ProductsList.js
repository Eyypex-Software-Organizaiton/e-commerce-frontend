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

  useEffect(() => {
    setData(productsListData[slug])
    setInitialValue(productsListData[slug])
  }, [slug])

  const listFunction = (e) => {
    const productList = document.querySelector('.productList')
    const elements = document.querySelectorAll('.icon')

    elements.forEach((element) => {
      console.log(element)
      const filter = element.getAttribute('filter')
      console.log(filter)
      productList.classList.remove('md:grid-cols-' + filter)
      element.classList.remove('icon-active')
      productList.classList.add('md:grid-cols-' + e)
      e === filter && element.classList.add('icon-active')
    })
  }
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
    const sortedData = data.filter((item) => item.stok)
    if (filter) {
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
        />
        <div className='productList grid grid-cols-2 md:grid-cols-3'>
          {data.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductsList
