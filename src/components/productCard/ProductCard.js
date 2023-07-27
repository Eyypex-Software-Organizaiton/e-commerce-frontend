import React from 'react'
import { useLocation } from 'react-router-dom'
import './ProductCard.css'
const ProductCard = ({ product }) => {
  const location = useLocation()
  const { id, price, discount_price, discount, shipping, img, title } = product
  // const currentLocation = location.pathname
  // console.log(currentLocation)
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <a href={title}>
        <img className='rounded-t-lg' src={'/assets/images/' + img} alt='' />
      </a>
      <div className='p-5'>
        <a href={title}>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate'>
            {title}
          </h5>
        </a>
        <div className='flex gap-x-2'>
          <p className='price mb-3 font-normal text-gray-700 dark:text-gray-400 line-through'>
            {price}
          </p>
          <p className='price mb-3 font-normal text-gray-700 dark:text-gray-400'>
            {discount_price}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
