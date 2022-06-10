import React from "react";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({product}) => {
  return (
   
    <div className= 'container w-50'>
    <h1>{product.title}</h1>
    <img src={product.image} alt={product.title}/>
    <p>{product.description}</p>
    <p>${product.price}</p>
    <p>{product.stock}</p>
    <ItemCount stock={product.stock} initial={1}/>
    
    </div>
    
  );
};

export default ItemDetail;
