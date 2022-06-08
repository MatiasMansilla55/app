
import {useState} from "react"

const 
ItemCount = ({stock}) => {


    
  const [contador, setContador] = useState(0)
  


  const aumentarContador = () =>{
    console.log("aumentarContador");
    
    if(contador <stock) {setContador(contador + 1)}   
  }
  const bajarContador = () =>{
    if(contador > 0 ){
      setContador(contador - 1)
    }
  }

function onAdd () {

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