import React from "react";
import './mainContent.css';
import { Link, useParams } from "react-router-dom";
import {getProductById, getProductsByCategory, getProducts} from '../data/product_data';
import {useEffect, useState} from 'react';
import { Container, Row, Col, InputGroup,  FormControl } from 'react-bootstrap';
import {getDocs, collection, getDoc, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { useCart } from "react-use-cart";
import { Button } from "react-bootstrap";
import { BsCartPlus } from 'react-icons/bs';
import { useThemeHook } from '../ThemeProvider';





function MainContent() {
    const [product_card, setProducts] = useState([])
    const {testid} = useParams()
    const { addItem } = useCart();
    const [theme] = useThemeHook();


   
   
    const categoryId = parseInt(testid)
    useEffect(() => { 
        const collectionRef = categoryId
        ? query(collection(db, 'product_card'), where('category_id', '==', categoryId))
        : collection(db, 'product_card')

        getDocs(collectionRef).then( response => {
            console.log(response)
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                console.log("a",data)

                return { id: doc.id, ...data}
            })
            console.log(productsAdapted)
            setProducts(productsAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
           
        })  
    }, [categoryId])
 console.log("estoy en la cat",categoryId)

      /* console.log("test", categoryId)
       console.log("num", testid)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts 
       
        asyncFunction(categoryId).then(response => {
            setProducts(response) 
            console.log(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
           
        })  
    }, [categoryId])*/




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
                        <Button 
                        onClick={()=>addItem(product_card)}
                        className={theme? 'bg-dark-primary text-black' : 'bg-light-primary'}
                        style={{borderRadius: '0', border: 0}}
                    >
                        <BsCartPlus size="1.8rem"/>
Agregar                    </Button>

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