import React, { useContext } from 'react'
import './css/ShopCategory.css'
import {ShopContext} from '../Context/ShopContext'
import Item from '../Components/items/Item';
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src={props.banner}alt="" />
      <div className="shop-category-nav">
        <p><span>Showing 1-12</span> out of 36 products</p>
        <button>Sort by</button>
      </div>
      <div className="shop-category-items">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key= {i} id={item.id} image = {item.image} name={item.name} newPrice={item.new_price} oldPrice = {item.old_price}/>
          }else{
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        <button>Explore more</button>
      </div>
    </div>
  )
}

export default ShopCategory
