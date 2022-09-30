import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/Banner/Banner";
import MainContent from "./components/mainContent/mainContent";
import ItemList from "./components/navbar/ItemList";




function App ( ){
  return(
    <React.Fragment>
      <Navbar/>
      <Banner />
      <ItemList greeting={'Nuevos Productos!'} />
      <MainContent/>
      <ItemList greeting={'Hola!'} />
    </React.Fragment>
  );
}

export default App;