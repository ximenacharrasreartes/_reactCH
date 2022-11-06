const product_card = [ 
    {
        id : 1,
        category_id: 1,
        product_name: "Ghost in the Dark",
        description: "Brillá con las refrescantes notas de lemongrass y bergamota en este Halloween.",
        price: 1500,
        currency: "$",
        thumb: "./images/ghostie_soap.png",
        stock: 5000

    },
    {
        id : 2,
        category_id: 1,
        product_name: "Bohemian",
        description: "Alegrá tu día y tu piel con este jabón lleno de limón.",
        price: 1100,
        currency: "$",
        thumb: "./images/bohemian_soap.png",
        stock: 5000

    },
    {
        id : 3,
        category_id: 1,
        product_name: "Golden Pear",
        description: "Este lujoso jabón está lleno de cálidas especias afrut",
        price: 1900,
        currency: "$",
        thumb: "./images/golden_pear_soap.png",
        stock: 5000

    },
    {
        id : 4,
        category_id: 1,
        product_name: "Snow Bear",
        description: "Este osito está lleno de leche de avena para una limpieza suave y cremosa. El aroma de vainilla y almendra reconforta y nutre la piel de forma delicada.",
        price: 1800,
        currency: "$",
        thumb: "./images/polar_bear_soap.png",
        stock: 5000

    },
    {
        id : 5,
        category_id: 1,
        product_name: "Baked Alaska",
        description: "Su refrescante aroma a limón y pomelo te ayuda a alejar los días grises.",
        price: 1100,
        currency: "$",
        thumb: "./images/baked_alaska_soap.png",
        stock: 5000

    },
    {
        id : 6,
        category_id: 2,
        product_name: "Screamo",
        description: "Tu fantasma de confianza.",
        price: 1300,
        currency: "$",
        thumb: "./images/screamo.png",
        stock: 5000

    },
    {
        id : 7,
        category_id: 3,
        product_name: "Snow Fairy",
        description: "Aroma a Snow Fairy.",
        price: 1900,
        currency: "$",
        thumb: "./images/snow_fairy.png",
        stock: 5000

    },
    {
        id : 8,
        category_id: 4,
        product_name: "Bat Box",
        description: "Un trío (nada) aterrador.",
        price: 1100,
        currency: "$",
        thumb: "./images/box1.png",
        stock: 5000

    }
]
export const getProducts = () => { //Todos los productos
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(product_card)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(product_card.find(prod => {
                return prod.id === id
            }))
        }, 500)
    })
}
export const getProductsByCategory = (category) => { //Productos filtrados por categoría
    return new Promise (resolve => {
        setTimeout(() => { //Devuelve los productos cuya categoría coincida con el parametro ingresado
            resolve(product_card.filter(prod => prod.category_id === category))
        }, 500)
    })
}