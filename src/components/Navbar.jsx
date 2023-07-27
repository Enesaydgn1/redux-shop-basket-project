import React from 'react'
import { BsFillBasketFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'

function Navbar() {
  const {quantity} = useSelector((store) => store.cart)
  
    return (
      <div className='navDiv'>
        <h3>Kurs Uygulaması</h3>
        <div className='navBasket'>
          <p>{quantity}</p>
          <BsFillBasketFill className='icon' />

        </div>
      </div>
    )
  }

export default Navbar