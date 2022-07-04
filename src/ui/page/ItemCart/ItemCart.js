import React,{useContext} from 'react'
import {context} from "../../../api/context/CartContext/CartContext"
import '../ItemCart/ItemCart.css'

const ItemCart = ({product}) => {
 const resultado=useContext(context)

  return (
    <div className='Cart' >
        <img src={product.image} alt={product.title}/>
            <div>
                <p>Titulo:{product.title}</p>
                <p>Cantidad:{product.quantity}</p>
                <p>Precio $:{product.price}</p>
                <p>Subtotal:${product.quantity*product.price}</p>
                <button onClick={()=>resultado.removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart