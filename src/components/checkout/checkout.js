import React, { useContext } from "react";
import { CartProvider, useCart } from "react-use-cart";
import Cart from "../cart/Cart";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addDoc, collection } from "firebase/firestore";
import {db} from '../../services/firebase/index';


const Checkout = () => {

    const {items, cartTotal}= useCart()

    const handleSubmit = (e) => {

        e.preventDefault()
        const {name, phone, mail, address, dni } = e.target.elements
       // console.log({name: name.value, phone: phone.value, mail: mail.value })


        

    const objOrder = {
        buyer:
        {
            name: name.value,
            phone: phone.value,
            mail: mail.value,
            address: address.value,
            dni: dni.value


        },
        items:items, 
        total: cartTotal
    }

    console.log(objOrder)
    const orderCreated =  addDoc(collection(db, "orders"), {
    ...objOrder
    })
    console.log("Id de la orden: " + orderCreated.id)
}


    return(

        <div>
            Terminá tu compra 

            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingresá tu Email</Form.Label>
        <Form.Control id="mail" type="email" placeholder="Ingresar mail" />
        <Form.Text className="text-muted">
          Esta es la dirección con la que podrás hacer seguimiento de tu pedido.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control id ="name" idtype="text" placeholder="Nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label >DNI</Form.Label>
        <Form.Control id="dni"type="text" placeholder="DNI" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control id="phone" type="text" placeholder="Teléfono" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label >Dirección Completa </Form.Label>
        <Form.Control id= "address"type="text" placeholder="Dirección" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Quiero recibir novedades." />
      </Form.Group>
      <Button  variant="primary" type="submit">
        Comprar
      </Button>
    </Form>

        </div>
    )
    }


export default Checkout