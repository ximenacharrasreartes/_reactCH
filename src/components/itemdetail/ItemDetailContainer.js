import React from "react";
import {getProductById} from "../data/product_data";
import './ItemDetailContainer.css';
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";



const DetailContent = ({ id,thumb, product_name, category_id, description, price, currency }) => {
    
     const { addItem } = useCart();
    const addToCart = () => {
        
    }


    
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
        <a class="cart-btn" href="#"><i class="cart-icon ion-bag"></i> Agregar a Mi Carrito</a> </div>
        
        </div>
        </div>
        </div>
    </div>

    </div>
    );
    
    
const params = useParams()

console.log(params)

}

export default DetailContent;