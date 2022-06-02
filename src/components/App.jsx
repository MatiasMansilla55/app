import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Navbar from "./Navbar";
import '../style/styles.css';
import ItemListContainer from "./ItemListContainer";





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
      <Main />

      <Footer />
    </>
  );
};

//export default variable
//export variable

export default App;
