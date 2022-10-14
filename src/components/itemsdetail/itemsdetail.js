import './itemsdetail.css'
import { useState, useEffect } from 'react'
import ItemDetailContainer from '../itemdetail/ItemDetailContainer'
import { useParams } from 'react-router-dom'
import React from 'react'
import { getProductById } from '../data/product_data'

const ItemDetail = () => {
    const [product_card, setProduct] = useState() 

    const { productId } = useParams() 
 
    console.log(productId)
    const productIdnum  = parseInt(productId)
    useEffect(() => {
        getProductById(productIdnum).then(response => {
            setProduct(response)
        }).finally(() => {
       
        })
    }, [productIdnum])

   

    return(
        <div className='ItemDetailContainer' >
            <ItemDetailContainer  {...product_card} /> {}
        </div>
    )
}

export default ItemDetail