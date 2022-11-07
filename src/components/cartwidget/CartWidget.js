import React from 'react';
import {FaBars, FaTimes, FaShoppingCart} from "react-icons/fa";
import './CartWidget.css';
import { Cart } from '../../Context/Cart';
import { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';




const CartWidget = () => {
  const {totalQuantity} = useContext(Cart)
    const navigate = useNavigate()

  return (
    <div className="cart-widget">
      <FaShoppingCart icon={FaShoppingCart} size="20px" color="white" />
      <div className="qty-display" text-align="center">12</div>
    </div>
  );
};

export default CartWidget;