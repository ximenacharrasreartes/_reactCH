import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/Banner/Banner";
import MainContent from "./components/mainContent/mainContent";
import ItemList from "./components/navbar/ItemList";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ItemDetail from "./components/itemsdetail/itemsdetail";


function App ( ){
  return(
    <React.Fragment>
      <BrowserRouter><Navbar/>
      <Banner />
      <ItemList greeting={'Nuevos Productos!'} />
      <ItemList greeting={'Hola!'} />

      <Routes>
      
      <Route path='/' element={ <MainContent/>}/>
      <Route path='/category/:testid' element={ <MainContent/>}/>
      
      <Route path='/detail/:productId' element={ <ItemDetail/>}/>
      
     
      </Routes>
      
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;