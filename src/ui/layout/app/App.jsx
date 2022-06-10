import Header from "../header/Header";
import Footer from "../footer/Footer";
import Main from "../main/Main";
import Navbar from "../navbar/Navbar";
import '../../../style/styles.css';

import ItemListContainer from "../../page/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../../page/ItemDetailContainer/ItemDetailContainer";





const App = () => {
  
  // const resultado = useState(0)//funciona como variable,es raro guardar funciones,
  // const contador = resultado[0]
  // const cambiarContador = resultado[1]

  
  return (
    <>
      <Header />
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a Shopify"
      />
      <ItemDetailContainer/>
      <Main />

      <Footer />
    </>
  );
};

//export default variable
//export variable

export default App;
