import React from 'react'
import ItemCount from './ItemCount';

const Item = ({id, name,image, stock}) => {
  
  return (
    <div className='container w-50' key={id}>
      <h1>{name}</h1>
      <img src={image} alt={id}></img>
      <ItemCount stock={stock}/>
    </div>
  )
}

export default Item;