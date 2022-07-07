
import ItemListContainer from "../../page/ItemListContainer/ItemListContainer";
import '../main/main.css';
import {Routes, Route} from "react-router-dom";
import ItemDetailContainer from "../../page/ItemDetailContainer/ItemDetailContainer";
import Cart from "../../page/Cart/Cart";


const Main = (props) => {
  return (
    <main className="layout">
    
    
      <h1 className="mt-5 text-center">{props.greeting}</h1>
      <Routes>
        <Route path ="/"element={<ItemListContainer/>} />
        <Route path ="/category/:categoryId" element={<ItemListContainer />}/>
        <Route path="/item/:id"   element={<ItemDetailContainer/>}/>
        <Route path="/cart"   element={<Cart/>}/>
      </Routes>

      </main>
  )
}

export default Main