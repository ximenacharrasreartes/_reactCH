import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/Banner/Banner";
import MainContent from "./components/mainContent/mainContent";
import ItemList from "./components/navbar/ItemList";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetail from "./components/itemsdetail/itemsdetail";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useThemeHook} from './components/ThemeProvider'
import Cart from "./components/cart/Cart";
import { Router } from "@reach/router";

function App ( ){
  const [theme] = useThemeHook();
  return(
  
    <React.Fragment>
        <main className={theme? 'bg-black': 'bg-light-2'}  > <Navbar/></main>
      <BrowserRouter><Navbar/>
      <Banner />
      <ItemList greeting={'Nuevos Productos!'} />
      

      <Routes>
      
      <Route path='/' element={ <MainContent/>}/>
      <Route path='/category/:testid' element={ <MainContent/>}/>
      
      <Route path='/detail/:productId' element={ <ItemDetail/>}/>
      
      <Route path='/cart' element={ <Cart/>}/>
      
      
      
     
      </Routes>
      
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;