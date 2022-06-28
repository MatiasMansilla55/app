import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import {context} from "../../../api/context/CartContext/CartContext";
import ItemCart from "../ItemCart/ItemCart"

const Cart = () => {
    const {copia, totalPrice} = useContext(context);

    
    
    if(copia.length===0){
        return(
            <div>
            <p>No hay elementos en el carrito</p>
            <Link to ="/">Hacer compras</Link>
            </div>
        )
    }

  return (
  <div>{
    copia.map(product => <ItemCart key ={product.id} product={product}/>)
  }
  <p>
    total: {totalPrice()}
  </p>
  </div>
)
}

export default Cart