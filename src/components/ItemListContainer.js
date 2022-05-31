import React from 'react'

const ItemListContainer = (props) => {

  console.log(props.greeting);
  return (
    
        <h1 className='text-center'>
        {props.greeting}
        </h1>
   
  )
}

export default ItemListContainer
