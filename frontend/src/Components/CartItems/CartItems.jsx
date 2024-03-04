import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {

  const {all_product,cartItems,removeFromCart,totalPrice} = useContext(ShopContext)

  return (
    <div className='cart-items'>
        <div className="cart-items-nav">
            <p>Proucts</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
          if(cartItems[e.id]>0){
            return <div className='cart-container'> <div className='cart-items-componet'>
            <img src={e.image} alt="" height={130} width={100}  />
            <p className='title'>{e.name}</p>
            <p>{e.new_price}</p>
            <p>{cartItems[e.id]}</p>
            <p>{e.new_price*cartItems[e.id]}</p>
            <img className='remove-icon' onClick={removeFromCart()} src={remove_icon} alt="" height={30} width={30}  />
            </div>
            <hr />
            </div>
          }
        })}
        <div className="total">
          <h1>Cart total</h1>
          <div className="total-info">
            <div className='totalprice-info-bar'>
              <p>sub total</p>
              <p>{totalPrice()}</p>
            </div>
            <hr />
            <div className='totalprice-info-bar'>
              <p>shipping fee</p>
              <p>$0</p>
            </div>
            <hr />
            <div className='totalprice-info-bar'>
            <h5>Total</h5>
            <h5>{totalPrice()}</h5>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CartItems
