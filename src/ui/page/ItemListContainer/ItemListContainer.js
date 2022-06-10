import React from 'react'
import ItemList from '../ItemList/ItemList';
import { useEffect, useState} from 'react'
import {customFetch} from '../../../utils/productos';




const ItemListContainer = (props) => {
  
  const [item, setItem] = useState([])

  useEffect(() =>{
    customFetch()
    .then(r =>setItem(r))
  }, [item])
  console.log([item]);

 console.log(props.greeting);
 
 if(item.length>0){
  return (
      <>
        <h1 className=' mt-5 text-center'>
        {props.greeting}
        </h1>
        <ItemList products={item}/>
      
        
     </>
  )
  }else{
  return (
    <div>
      <h2>
        {props.greeting}
      </h2>
      <p>Cargando...</p>
      <ItemList products={item}/>
    </div>
  )
  }
}

export default ItemListContainer
