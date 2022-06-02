import React from 'react'
import {useState} from "react"

const 
ItemCount = ({stock, initial, onAdd}) => {

    const propOnAdd = onAdd;
    console.log(propOnAdd);
    
  const [contador, setContador] = useState(initial)
  
  const aumentarContador = () =>{
    console.log("aumentarContador");
    
    if(contador <stock) {setContador(contador + 1)}   
  }
  const bajarContador = () =>{
    if(contador > initial ){
      setContador(contador - 1)
    }
  }
  return (
    <div className='mt-5 d-flex justify-content-center '>
        
        <p> El contador va: {contador}
      <button className= "alert alert-success" onClick={aumentarContador}>+</button>
      <button className= "alert alert-primary"onClick={onAdd}>Confirmar</button>
      <button  className= "alert alert-danger"onClick={bajarContador}>-</button>
      </p>
        
        
    </div>
  )
}

export default ItemCount