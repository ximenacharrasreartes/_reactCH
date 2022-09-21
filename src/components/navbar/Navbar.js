import './Navbar.css';
import {FaBars, FaTimes} from "react-icons/fa";
import { useRef  } from 'react';
//useRef hook de react https://dev.to/duxtech/como-rayos-funciona-el-hook-useref-en-react-2lah

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classlist.toggle("responsive_nav");
    }
    return(
        <header>
            <h3> eCommerce Test</h3>
            <nav ref={navRef}>
                <a href=''>Home</a>
                <a href=''>Productos</a>
                <a href=''>Productos 2</a>
                <a href=''>Mi Cuenta</a>
                <a href=''> Carrito </a>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;


//use iconos de la libreria de React  yarn install react-icons
//https://www.npmjs.com/package/react-icons