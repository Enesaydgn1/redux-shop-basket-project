import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CourseItem from '../components/CourseItem'
import { clearCart } from '../control/cartSlice'

function CourseList() {
    const dispatch = useDispatch();
    const { cartItems, quantity, total } = useSelector((store) => store.cart)

    return (
        <div className='cartApp'>
            {quantity < 1 ? (
                <section className='cart'>
                    <header>
                        <h2>Sepetim</h2>
                        <h4>Bomboş</h4>
                    </header>
                </section>
            ) : (
                <section className='cart'>
                    <header>
                        <h2>Sepetim</h2>
                    </header>
                    <div>
                        {cartItems.map((item) => {
                            return <CourseItem key={item.id} {...item} />
                        })}
                    </div>

                    <footer>
                        <hr />
                        <div>
                            <h4>Toplam tutar <span>{total}₺</span></h4>
                        </div>
                        <button className='cartClearButton' onClick={() => dispatch(clearCart())}>Temizle</button>
                    </footer>
                </section>

            )
            }

        </div>
    )
}

export default CourseList