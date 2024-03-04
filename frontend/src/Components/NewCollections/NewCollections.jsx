import React from 'react'
import './NewCollections.css'
import new_collections from '../Assets/new_collections'
import Item from '../items/Item'
const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item)=>{
            return <Item key= {item.id} id={item.id} image = {item.image} name={item.name} newPrice={item.new_price} oldPrice = {item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections
