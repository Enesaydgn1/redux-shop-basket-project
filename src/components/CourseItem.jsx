import React from 'react'
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'
import {  useDispatch } from 'react-redux'
import { removeItem , increase, decrease} from '../control/cartSlice';


function CourseItem({ id, title, price, img, quantity }) {
    const dispatch = useDispatch();
    return (
        <div className='cartDetail'>
            <img src={img} alt="" />
            <div className='cartRightDetail'>
                <h4>{title}</h4>
                <h4>{price}₺</h4>
                <div >
                    <button className='cartQuantityButton' onClick={()=>{dispatch(increase(id))}}>
                        <BsChevronUp />
                    </button>
                    <p className='cartQuantity'>{quantity}</p>
                    <button className='cartQuantityButton' onClick={()=>{dispatch(decrease(id))}}>
                        <BsChevronDown />
                    </button>
                </div>
                <button className='cartDeleteButton' onClick={()=>{dispatch(removeItem(id))}}>
                    Sil
                </button>
            </div>

        </div>
    )
}

export default CourseItem