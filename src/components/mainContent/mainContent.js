import React from "react";
import './mainContent.css';
import { Link, useParams } from "react-router-dom";
import {getProductById, getProductsByCategory, getProducts} from '../data/product_data';
import {useEffect, useState} from 'react';


function MainContent() {
    const [product_card, setProducts] = useState([])
    const {testid} = useParams()
   
    const categoryId = parseInt(testid)
    useEffect(() => { //Define una operación que va a ejecutarse en cada recarga
        
       console.log("test", categoryId)
       console.log("num", testid)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts //Si hay ID ejecuto el primero, sino traigo todo el resto
       
        asyncFunction(categoryId).then(response => {
            setProducts(response) //Cargo los productos en la variable
            console.log(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
           
        })  
    }, [categoryId])




    console.log(product_card);
    const listItems = product_card.map((item) => <div className="wrapper">
        <div className="outer">
            <div class="content animated fadeInLeft">
                <span class="bg animated fadeInDown"> ¡Nuevo! </span>
                <div className="card" key={item.id}>
                    <div className="card_img">
                        <img src={item.thumb} />

                    </div>
                    <div className="card_header">
                        <h2> {item.product_name} </h2>
                        <p> {item.description} </p>
                        <p className="price"> {item.price} <span> {item.currency} </span> </p>
                        <div class="button"><a className="price"> {item.price} <span> {item.currency} </span> </a>
                            <a class="cart-btn" href="#"><i class="cart-icon ion-bag"></i> Agregar a Mi Carrito</a> </div>
                        <Link  to={`/detail/${item.id}`} class="bg animated fadeInDown"> Detalle </Link>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
    return (
        <div className="main_content">
            <h3 className="title"> Productos </h3>
            {listItems}
        </div>
    );
}

export default MainContent;