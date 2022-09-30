import React from "react";
import product_card from "../data/product_data";
import './mainContent.css';

// componente Card de Producto para Pagina Principal y Lista de Productos
const MainContent = () => {
    console.log(product_card);
    const listItems = product_card.map((item)=>
    <div className="wrapper">
        <div className="outer">
        <div class="content animated fadeInLeft">
        <span class="bg animated fadeInDown"> ¡Nuevo! </span>
    <div className="card" key= {item.id}  > 
    <div className="card_img">
        <img src={item.thumb} />

    </div>
    <div className="card_header" >
        <h2> {item.product_name} </h2>
        <p> {item.description} </p>
        <p className="price" > {item.price} <span> {item.currency} </span> </p>
        <div class="button"><a className="price" > {item.price} <span> {item.currency} </span> </a>
        <a class="cart-btn" href="#"><i class="cart-icon ion-bag"></i> Agregar a Mi Carrito</a> </div>
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
    )
}

export default MainContent;