import React, {useContext} from "react";
import {context} from "../../api/context/CartContext/CartContext.js"
import { NavLink } from "react-router-dom";


// arrayDeProductos.forEach(producto =>if(producto.id==idDelProducto) {
  
// });

const CartWidget = () => {
  

  const resultado =useContext(context)
  
  console.log(resultado)

  return (
  <NavLink to="/cart"><span className="rounded material-symbols-outlined ">shopping_cart_checkout{resultado.totalProducts() || ''}</span></NavLink>
  )
};

export default CartWidget;
