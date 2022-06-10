import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const Item = ({id, title,image, stock}) => {
  
  return (
    <div className='container w-50' key={id}>
      <h1>{title}</h1>
      <img src={image} alt={id}></img>
      <ItemCount stock={stock}/>
    </div>
  )
}

export default Item;