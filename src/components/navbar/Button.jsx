import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiUserPlus } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';

const Button = () => {
  return (
   <div className='flex gap-5 text-[20px]'>
     <AiOutlineShoppingCart/>
<AiOutlineUser/>
<BiUserPlus/>
<AiOutlineSearch/> 
   </div>
  )
}

export default Button