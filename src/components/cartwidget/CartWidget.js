import React from 'react';
import {FaBars, FaTimes, FaShoppingCart} from "react-icons/fa";
import './CartWidget.css';

const CartWidget = () => {
  //la lógica va siempre antes del return

  return (
    <div className="cart-widget">
      <FaShoppingCart icon={FaShoppingCart} size="20px" color="white" />
      <div className="qty-display" text-align="center">12</div>
    </div>
  );
};

export default CartWidget;