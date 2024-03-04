import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../items/Item'

const Popular = () => {
  return (
    <div className='popular'> 
      <h1>Popular In Women</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item)=>{
            return <Item key= {item.id} id={item.id} image = {item.image} name={item.name} newPrice={item.new_price} oldPrice = {item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
