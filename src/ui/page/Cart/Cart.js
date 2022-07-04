import React,{useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import {context} from "../../../api/context/CartContext/CartContext";
import ItemCart from "../ItemCart/ItemCart"
import {db} from "../../../api/firebase/config/firebase"
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import  Form  from '../form/Form';

const Cart = (product) => {
    const {copia, totalPrice,clearCart} = useContext(context);
    const [data,setData] = useState({name:'',email:'', phone:''});
    const [order,setOrder] = useState('')
    
    const handleChange =(e) =>{
      const{name,value} = e.target;
      setData({
        ...data,[name]:value,
      })
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      const objetoOrden ={
        buyer:{
          name: data.name,
          phone: data.phone,
          email: data.email
        },
     
        copia,
        total:totalPrice(),
        date: serverTimestamp()
      };

      const ref = collection(db, 'orders');
      addDoc(ref,objetoOrden)
      .then((response)=>{
        setOrder(response.id);
        clearCart()
        
      });


    }

    if(order !==''){
      return <h1>Gracias por tu compra, tu numero de envio es:{order}</h1>
    }


    if(copia.length===0){
        return(
            <div >
            <p>No hay elementos en el carrito</p>
            <Link to ="/">Hacer compras</Link>
            </div>
        );
    }

  return (
  <div>
    
    {
    copia.map(product=><ItemCart key={product.id} product={product}/>)
    }
  
  <p>
    total: {totalPrice()}
  </p>
  <Form
    handleChange={handleChange}
    data={data}
    handleSubmit={handleSubmit}
  />
 
  </div>
)
}

export default Cart