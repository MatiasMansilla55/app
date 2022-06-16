import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom'
import '../Item/Item.css'

const Item = ({id, title, image, stock}) => {
  
  return (
    <article className='item' key={id}>
      <h1>{title}</h1>
      <img  src={image} alt={id}></img>
      <Link to={`/item/${id}`}>Ver Detalle</Link>
      <ItemCount stock={stock}/>
    </article>
  )
}

export default Item;