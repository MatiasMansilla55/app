import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Main from "../main/Main";
import '../../../style/styles.css';
import { BrowserRouter } from "react-router-dom";
import { MiProvider }from "../../../../src/api/context/CartContext/CartContext"



const App = () => {
  


  
  return (
   
    <BrowserRouter>
    <MiProvider>
      <Header />
      <Main greeting="Bienvenidos a Shopify"/>
      </MiProvider>
      <Footer />
    </BrowserRouter>
   
  );
};

//export default variable
//export variable

export default App;
