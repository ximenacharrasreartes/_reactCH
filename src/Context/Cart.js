import { useState, useEffect, createContext } from "react"

export const Cart = createContext({
    cartArray: [],
    totalQuantity: 3
})

export const CartProvider = ({children}) => {
    const [cartArray, setCartArray] = useState([]) //Variable que representa al carrito, un arreglo de elementos
    const [totalQuantity, setTotalQuantity] = useState(0) //Variable que representa la cantidad total de items en el carrito
    const [totalAmount, setTotalAmount] = useState(0) //Variable que representa el costo total del carrito

    useEffect(() =>  {
        const totalq = getQuantity() //Actualiza el valor de TQ cada vez que se modifica el arreglo
        setTotalQuantity(totalq)
    },[cartArray]) 

    useEffect(() => {
        const total = getTotalAmount() //Actualiza el valor de TA cada vez que se modifica el arreglo
        setTotalAmount(total)
    }, [cartArray])

    const addItemToCart = (productToAdd, quantityToAdd) => { //defino la función de agregar producto al carrito

        if(!isInCart(productToAdd.id)){ //Si el producto NO está actualmente en el carrito
            productToAdd.quantity = quantityToAdd // Le defino la propiedad de cantidad
            setCartArray([...cartArray, productToAdd]) // Creo un nuevo carrito con el producto agregado y los elementos que estaban de antes
            console.log(cartArray)
        } else{ // Si el producto SI se encuentra en el carrito
            const tempCart = cartArray.map(prod => { //Creo un carrito temporal 
                if(prod.id === productToAdd.id){ //Mapeo los productos del carrito hasta encontrar el que quiero actualizar
                    const tempProduct = { //Creo un producto temporal con las propiedades del mismo pero cambiandole la cantidad
                        ...prod,
                        quantity: quantityToAdd
                    }
                    return tempProduct
                }else { //Si no era el producto a actualizar, lo dejo como está
                    return prod
                }
            })
            setCartArray(tempCart) // Cargo en el carrito el actualizado
            console.log(cartArray)
        }
    }

    const isInCart = (id) => { // Mapeo el carrito hasta encontrar un producto que tenga el mismo id que el parametro
        return cartArray.some(prod => prod.id === id)
    }

    const removeItem = (id) => { //Creo un nuevo carrito y lo guardo, evitando el producto cuyo id coincide con el parametro
        const tempCart = cartArray.filter(prod => prod.id !== id)
        setCartArray(tempCart) 
    }

    const getQuantity = () => { // Recorre el array del carrito sumando las cantidades y lo devuelve
        let q = 0
        cartArray.forEach(prod => {
            q += prod.quantity
        })
        return q 
    }

    const getTotalAmount = () => { // Recorre el array del carrito sumando los totales y lo devuelve
        let q = 0
        cartArray.forEach(prod => {
            q += prod.quantity * prod.price
        })
        return q
    }

    const clearCart = () => {
        setCartArray([])
    }

    const getProductQuantity = (id) => { // Busca la cantidad del producto según el id indicado
        const producto = cartArray.find(prod => prod.id === id)
        return producto.quantity
    }

    return ( // Es el proveedor del contexto, para agregar a la app principal
        <Cart.Provider value={{ cartArray, addItemToCart, removeItem, isInCart, totalQuantity, totalAmount, clearCart, getProductQuantity }}>
            {children}
        </Cart.Provider>
    )
}