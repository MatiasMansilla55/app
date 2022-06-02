import React from 'react'
import ItemCount  from './ItemCount';
const ItemListContainer = (props) => {

  console.log(props.greeting);
  return (
      <>
        <h1 className=' mt-5 text-center'>
        {props.greeting}
        </h1>
        <ItemCount stock={5} initial={1} onAdd={()=>{}}/>
        </>
  )
}

export default ItemListContainer
