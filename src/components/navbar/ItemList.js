import './ItemList.css' ;
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, InputGroup,  FormControl } from 'react-bootstrap';

import {BiSearch} from 'react-icons/bi';
import {getProductById, getProductsByCategory, getProducts} from '../data/product_data';
import SearchFilter from 'react-filter-search';
import {getDocs, collection, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';


///Buscador 

const ItemList = ({greeting}) => {
    const  [ searchInput, setSearchInput] = useState( '');
    const [productData, setProductData] = useState([]);

    async function getResponse(){ 
        const res = await fetch('https://fakestoreapi.com/products')
                        .then(res=> res.json());
                        setProductData(await res);
    }

    useEffect(() => {
        getResponse();
        console.log("test levantar productos con fetch", productData)

    }, [])

    return(
        <Container className="py-4">
            <Row className="justify-content-cencer">
                <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
                    <h1 className=''> Buscar</h1>
                    <InputGroup className='mb-3'>
                    <InputGroup.Text>
                    
                    <BiSearch size= '2rem'></BiSearch>
                    
                    </InputGroup.Text>
                    <FormControl
                    placeholder='¿Qué te gustaría encontrar hoy?'
                    value={searchInput}
                    onChange={(e)=> setSearchInput(e.target.value)}
                    
                    />
                   </InputGroup>

                </Col>

             

              
                {searchInput}
            </Row>

        </Container>
    )
}

export default ItemList