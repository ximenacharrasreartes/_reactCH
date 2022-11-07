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

let { id, thumb, product_name, category_id, stock, description, price, currency } = props.data;
    
    const [theme] = useThemeHook();
    const { addItem } = useCart();

    const addToCart = () =>{
        addItem(props.data);
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
        <Button
                    onClick={()=> addToCart()}
                    className={`${theme? 'bg-dark-primary text-black':'bg-light-primary' } d-flex align-item-center m-auto border-0`}
                >
                    <BsCartPlus size="1.8rem" />
Agregar                </Button> </div>
        
        
      
           
        </div>
        </div>
        </div>
    </div>

    </div>
    );
    


};

export default DetailContent;