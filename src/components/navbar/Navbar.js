import './Navbar.css';
import {FaBars, FaTimes, FaShoppingCart} from "react-icons/fa";
import { useContext, useEffect, useRef, useState } from 'react';
import React from 'react';
import CartWidget from '../cartwidget/CartWidget';
import {ThemeContext} from '../ThemeProvider';
import { BiSun, BiMoon, BiCart } from 'react-icons/bi';
import { Button, Nav } from 'react-bootstrap';
import {Link} from "@reach/router";
import {useCart} from "react-use-cart";


function Navbar() {
    const {theme, setThemeMode} = useContext(ThemeContext);
    const [darkMode, setDarkMode] = useState(theme);
  

    useEffect(()=> {
        setThemeMode(darkMode);
        console.log("cambio de color de navbar")
    }, [darkMode]);

    const {
        isEmpty,
        totalItems,

    } =useCart();


    const navRef = useRef();

    const showNavbar = () => {
      

        navRef.current.classList.toggle("responsive_nav");
    };
    return(
        <header variant={darkMode?'dark': 'light'} 
        className={darkMode? 'bg-light-black border-bottom': 'bg-light border-bottom'}
        style={{width:'100%', position: 'fixed', zIndex:100}}
        >
            <h3 className={darkMode? 'text-dark-primary': 'text-light-primary'}> SOAP</h3>
            <Nav className='ms-auto'>
                    <Nav.Link
                    className={darkMode? 'text-dark-primary': 'text-light-primary'}
                    onClick={()=>setDarkMode(!darkMode)}
                    >
                        {darkMode? <BiSun size= "1.7rem"/> : <BiMoon size="1.7rem" />}
                    </Nav.Link> 
                    </Nav>
            <nav className={darkMode? 'text-dark-primary': 'text-light-primary'} ref={navRef}>
                <a href='/'>Home</a>
                <a href='/category/1'>Jabones</a>
                <a href='/category/2'>Bombas de Baño</a>
                <a href='/category/3'>Velas</a>
                <a href='/category/4'>Regalá Experiencias</a>
                <a href=''>Mi Cuenta</a>
                <Nav.Link
                className={`${darkMode? 'text-dark-primary': 'text-light-primary'}`}
                >
                    <Link to='/cart' >
                <BiCart to='/cart'size="2rem"/>
                {!isEmpty && <span style={{position: 'relative', left: '-21px', top: '-18px'}} > {totalItems} </span>}
                <span style={{ marginLeft: !isEmpty ? '-13px': 0  }}>Carrito </span>
                </Link>
                </Nav.Link>

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

