import React, { useContext } from 'react'
import './RelatedProduct.css'
import data from '../Assets/data'
import Item from '../items/Item'
const RelatedProduct = () => {

  
  return (
    <div className='related-products'>
      <h1>Related Products</h1>
      <hr />
      <div className="related-products-items">
        {data.map((item)=>{
        return <Item key= {item.id} id={item.id} image = {item.image} name={item.name} newPrice={item.new_price} oldPrice = {item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProduct
