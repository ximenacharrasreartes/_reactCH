import React, { useState } from "react";
import './ItemDetailContainer.css';
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Link } from  "@reach/router";
import { BsCartPlus } from 'react-icons/bs';
import { useCart } from 'react-use-cart';
import { useThemeHook } from '../ThemeProvider';
import { Button, Card} from 'react-bootstrap';






const DetailContent = (props) => {

const { id, thumb, product_name, category_id, stock, description, price, currency } = props;
    
    const [theme] = useThemeHook();
    const { addItem } = useCart();

    const addToCart = () =>{
        addItem(props);
    }
    
    return (
    <div className="wrapper">
        <div className="outer">
        <div class="content animated fadeInLeft">
  
        <div className="card" key= {id}  > 
       <div className="card_img_pdp">
        <img src={thumb} alt="test"  width="400"
     height="341" />

    </div>
    <div className="card_header" >
        <h2> {product_name} </h2>
        <p> {description} </p> <img src={thumb}></img>

       
                        <div class="button"><a className="price"> {price} <span> {currency} </span> </a>
                            <a class="cart-btn"   onClick={()=> addToCart()} ><i class="cart-icon ion-bag"></i> Agregar a Mi Carrito</a> </div>
                       

        
        
      
           
        </div>
        </div>
        </div>
    </div>

    </div>
    );
    


};

export default DetailContent;