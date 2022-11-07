import React from "react"
import { useContext } from "react"
import { Cart } from '../../Context/Cart'
import {Link} from 'react-router-dom'

const CartComp = () => {
const  { cartArray, totalAmount } = useContext(Cart) 
    
return(
   <div>
            <h1>Tu carrito de compras</h1>
        {
            cartArray.map(prod => ( //Mapeo los productos delk contexto del carrito
                    <div>
                        <h2>{prod.name}</h2>
                        <h3>Cantidad: {prod.stock}</h3>
                        <h3>Precio: ${prod.price} c/u</h3>
                        
                    </div>
        ))} 
        <div>
            <h2>Total del carrito: ${totalAmount}</h2>
            <Link to='/checkout'>Ir al Checkout</Link>
        </div>
   </div>
)}

export default CartComp