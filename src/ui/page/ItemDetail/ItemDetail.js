import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState  } from "react";
import '../ItemDetail/ItemDetail.css';
import { Link } from "react-router-dom"

const ItemDetail = ({product}) => {

  const[cantidadAComprar, setCantidadAComprar] = useState(true)


 const onAdd = (cantidadSeleccionada) =>{
  console.log("desde item detail:"+ cantidadSeleccionada);
  cantidadSeleccionada = cantidadAComprar;
  setCantidadAComprar (cantidadAComprar===false) ;

  }

  return (
   
    <div className= 'Detail-container'>
    <h1>{product.title}</h1>
    <img src={product.image} alt={product.title}/>
    <p>{product.description}</p>
    <p>precio:${product.price}</p>
    <p>Stock:{product.stock}</p>
   
     {cantidadAComprar===true? <ItemCount className="item-count" stock={product.stock} initial={1} onAdd={onAdd}/>: <Link to="/cart"><button className="alert alert-success">Terminar mi compra</button></Link>} 
   
   
    
    </div>
    
  );
};

export default ItemDetail;