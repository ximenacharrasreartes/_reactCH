import './itemsdetail.css'
import { useState, useEffect } from 'react'
import ItemDetailContainer from '../itemdetail/ItemDetailContainer'
import { useParams } from 'react-router-dom'
import React from 'react'
import { getProductById } from '../data/product_data';
import { getDoc, doc} from 'firebase/firestore';
import { db } from '../../services/firebase';


const ItemDetail = () => {
    const [product_card, setProduct] = useState() 

    const { productId } = useParams() 
 
    console.log(productId)
    const productIdnum  = parseInt(productId)
    
    
    
    useEffect(() => {

        const docRef = doc(db, 'product_card', productId)
        getDoc(docRef).then(Response => {
            console.log(Response)
            const data = Response.data()
            const productsAdapted = { id: Response.id, ...data}
            setProduct(productsAdapted)
        })
      
    }, [productIdnum])

   

    return(
        <div className='ItemDetailContainer' >
            <ItemDetailContainer  {...product_card} /> {}
        </div>
    )
}

export default ItemDetail