import './Navbar.css';
import {FaBars, FaTimes, FaShoppingCart} from "react-icons/fa";
import { useRef } from 'react';
import React from 'react';


//useRef hook de react https://dev.to/duxtech/como-rayos-funciona-el-hook-useref-en-react-2lah

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
    return(
        <header>
            <h3 className='marca'> SOAP</h3>
            <nav ref={navRef}>
                <a href=''>Home</a>
                <a href=''>Jabones</a>
                <a href=''>Bombas de Baño</a>
                <a href=''>Velas</a>
                <a href=''>Regalá Experiencias</a>
                <a href=''>Mi Cuenta</a>
               <button> <FaShoppingCart> Carrito</FaShoppingCart> </button>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;


//use iconos de la libreria de React  npm install react-icons
//https://www.npmjs.com/package/react-icons