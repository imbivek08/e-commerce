import React, { useContext } from 'react'

import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import Item from '../Components/items/Item';
import ProductDisplay from '../Components/productDisplay/ProductDisplay';
import ProductDiscription from '../Components/ProductDiscription/ProductDiscription';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();

  const product = all_product.find((e)=> e.id === Number(productId));

  return (
    <div>
    <Breadcrum product={product}/>
    <ProductDisplay product={product}/>
    <RelatedProduct/>
    
    </div>
  )
}

export default Product
