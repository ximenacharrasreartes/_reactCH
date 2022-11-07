import React, { useState } from "react";
import './ItemDetailContainer.css';
import { useParams } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';
import { Cart } from '../../Context/Cart';
import { useContext } from "react";





const DetailContent = ({ id,thumb, product_name, category_id, stock, description, price, currency }) => {
    const { addItemToCart, isInCart, getProductQuantity } = useContext(Cart)

    const handleOnAdd = (quantity) => {

        const productToAdd = {
            id,
            product_name,
            price
        }

        addItemToCart(productToAdd, quantity)
    }

    console.log(addItemToCart)
    
    return (
    <div className="wrapper">
        <div className="outer">
        <div class="content animated fadeInLeft">
        <span class="bg animated fadeInDown"> ¡Nuevo! </span>
        <div className="card" key= {id}  > 
       <div className="card_img_pdp">
        <img src={thumb} alt="test"  width="400"
     height="341" />

    </div>
    <div className="card_header" >
        <h2> {product_name} </h2>
        <p> {description} </p>
        <img src={thumb}></img>
        <p className="price" > {price} <span> {currency} </span> </p>
        <div class="button"><a className="price" > {price} <span> {currency} </span> </a> 
        <ItemCount class="cart-btn" onClick={handleOnAdd} stock={stock}  href="#"><i class="cart-icon ion-bag"></i> Agregar a Mi Carrito</ItemCount> </div>
        
        
      
           
        </div>
        </div>
        </div>
    </div>

    </div>
    );
    


};

export default DetailContent;