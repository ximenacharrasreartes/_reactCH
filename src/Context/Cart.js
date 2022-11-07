import { useState, useEffect, createContext } from "react"

export const Cart = createContext({
    cartArray: [],
    totalQuantity: 3
})

export const CartProvider = ({children}) => {
    const [cartArray, setCartArray] = useState([]) 
    const [totalQuantity, setTotalQuantity] = useState(0) 
    const [totalAmount, setTotalAmount] = useState(0) 

    useEffect(() =>  {
        const totalq = getQuantity() 
        setTotalQuantity(totalq)
    },[cartArray]) 

    useEffect(() => {
        const total = getTotalAmount() 
        setTotalAmount(total)
    }, [cartArray])

    const addItemToCart = (productToAdd, quantityToAdd) => { 

        if(!isInCart(productToAdd.id)){
            productToAdd.quantity = quantityToAdd 
            setCartArray([...cartArray, productToAdd]) 
            console.log(cartArray)
        } else{ 
            const tempCart = cartArray.map(prod => { 
                if(prod.id === productToAdd.id){ 
                    const tempProduct = { 
                        ...prod,
                        quantity: quantityToAdd
                    }
                    return tempProduct
                }else {
                    return prod
                }
            })
            setCartArray(tempCart)
            console.log(cartArray)
        }
    }

    const isInCart = (id) => {
        return cartArray.some(prod => prod.id === id)
    }

    const removeItem = (id) => { 
        const tempCart = cartArray.filter(prod => prod.id !== id)
        setCartArray(tempCart) 
    }

    const getQuantity = () => { 
        let q = 0
        cartArray.forEach(prod => {
            q += prod.quantity
        })
        return q 
    }

    const getTotalAmount = () => { 
        let q = 0
        cartArray.forEach(prod => {
            q += prod.quantity * prod.price
        })
        return q
    }

    const clearCart = () => {
        setCartArray([])
    }

    const getProductQuantity = (id) => { 
        const producto = cartArray.find(prod => prod.id === id)
        return producto.quantity
    }

    return (
        <Cart.Provider value={{ cartArray, addItemToCart, removeItem, isInCart, totalQuantity, totalAmount, clearCart, getProductQuantity }}>
            {children}
        </Cart.Provider>
    )
}