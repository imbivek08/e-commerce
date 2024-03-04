import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_dull from '../Assets/star_dull_icon.png'
import star_icon from '../Assets/star_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='product-display'>
        <div className='product-display-left'>
            <div className='product-display-left-list'>
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className='product-display-left-main'>
                <img src={product.image} alt="" height={740} />

            </div>
        </div>
        <div className='product-display-right'>
            <h1>{product.name}</h1>
            <div className='product-display-right-rating'>
                <div>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull} alt="" />
                </div> 
                <p>(122)</p>  
            </div>
            <div className='product-display-right-pricing'>
                ${product.new_price} <span>${product.old_price}</span>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia obcaecati explicabo, nihil harum eum placeat, commodi hic voluptatum sed maxime quasi, vitae ducimus a labore minus voluptas ad corporis? Quaerat.</p>
            </div>
            <div className='product-display-right-size'>
                <h3>Select Size</h3>
                <div className='product-display-right-size-icon'>
                    <div className='pdrs-icons'>S</div>
                    <div className='pdrs-icons'>M</div>
                    <div className='pdrs-icons'>L</div>
                    <div className='pdrs-icons'>XL</div>
                    <div className='pdrs-icons'>XXL</div>
                </div>
                <button onClick={()=>{
                    addToCart(product.id)
                }}>Add To Cart</button>
            </div>
            <div className='product-display-right-summary'>
                <p>Category:{product.category},T-shirt,Crop Top</p>
                <p>Lags:Modern Latest</p>
            </div>

        </div>
    </div>
  )
}

export default ProductDisplay
