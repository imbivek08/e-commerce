import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt='' />
        <p>VirtuMart</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("shop"); }}>
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> :null}
        </li>
        <li onClick={() => { setMenu("mens"); }}>
          <Link to="/mens">Men</Link>
          {menu === "mens" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("womens"); }}>
          <Link to="/womens">Women</Link>
          {menu === "womens" ? <hr /> :null}
        </li>
        <li onClick={() => { setMenu("kids"); }}>
          <Link to="/kids">Kid</Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/cart'><img src={cart_icon} alt=""></img></Link>
        <div className="nav-cart-count">0</div>
        <button><Link to='/login'>Login</Link></button>
      </div>
    </div>
  );
}

export default Navbar;
