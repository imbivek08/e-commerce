import React from 'react';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {
  Route,
  Routes
} from "react-router-dom";
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer';
import banner_kids from './Components/Assets/banner_kids.png'
import banner_mens from './Components/Assets/banner_mens.png'
import banner_womens from './Components/Assets/banner_women.png'
function App (){
  
  return (
    <div>
      
        <Navbar/>
  
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route exact path="/mens" element={<ShopCategory banner = {banner_mens} category="men"/>} />
          <Route path="/womens" element={<ShopCategory banner={banner_womens} category="women"/>} />
          <Route path="/kids" element={<ShopCategory banner={banner_kids} category="kid"/>} />
          <Route path='/product' element={<Product/>} >
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<LoginSignup/>} />
        </Routes>
  
        <Footer/>
    </div>
  );
  
}

export default App;
