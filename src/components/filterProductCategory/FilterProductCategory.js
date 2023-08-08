import React from 'react'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { FaThList } from 'react-icons/fa'
import './FilterProductCategory.css'

const FilterProductCategory = ({
  filterFunction,
  listFunction,
  handleStok,
  activeIcon,
  lengthOfData,
}) => {
  return (
    <div className='justify-between p-3 hidden md:flex'>
      <div className='filterLeft flex gap-x-3 justify-center items-center'>
        <select
          id='countries'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          onChange={(e) => filterFunction(e)}
        >
          <option value=''>Sırala</option>
          <option value='artan'>Artan</option>
          <option value='azalan'>Azalan</option>
          <option value='a-z'>A-Z</option>
          <option value='z-a'>Z-A</option>
        </select>
        <div className='flex items-center'>
          <input
            id='default-checkbox'
            type='checkbox'
            defaultValue=''
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            onClick={handleStok}
          />
          <label
            htmlFor='default-checkbox'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Stoktakiler
          </label>
        </div>
      </div>
      <div className='filterRight flex gap-x-3 justify-center items-center'>
        <p>{lengthOfData} Ürün</p>
        <BsFillGrid3X3GapFill
          color={activeIcon === 3 ? '#616c70' : '#c6c6c6'}
          className='icon icon-active'
          onClick={() => listFunction('grid grid-cols-2 md:grid-cols-3', 3)}
        />
        <BsFillGrid3X3GapFill
          color={activeIcon === 4 ? '#616c70' : '#c6c6c6'}
          className='icon'
          onClick={() => listFunction('grid grid-cols-2 md:grid-cols-4', 4)}
        />
        <FaThList
          color={activeIcon === 1 ? '#616c70' : '#c6c6c6'}
          className='icon'
          onClick={() => listFunction('grid', 1)}
        />
      </div>
    </div>
  )
}

export default FilterProductCategory
