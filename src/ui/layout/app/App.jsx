import Header from "../header/Header";
import Footer from "../footer/Footer";
import Main from "../main/Main";

import '../../../style/styles.css';
import { BrowserRouter } from "react-router-dom";





const App = () => {
  


  
  return (
   
    <BrowserRouter>
      <Header />
      <Main greeting="Bienvenidos a Shopify"/>
      <Footer />
    </BrowserRouter>
   
  );
};

//export default variable
//export variable

export default App;
