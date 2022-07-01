import React from 'react';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
// import { mockProduct } from '../../../utils/productos';
import ItemDetail from '../ItemDetail/ItemDetail';
import { db } from "../../../api/firebase/config/firebase"
import { collection , getDoc , doc } from "firebase/firestore"



const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const[loading,setLoading] = useState(true)
    const {id} = useParams()

console.log(typeof id)
    useEffect(() =>{
      setLoading(true)

      const collectionProductos = collection(db, "productos");
      const refeDelDoc = doc(collectionProductos, id);
      const consulta = getDoc(refeDelDoc);
  
      consulta
        .then(resultado=>{
          //console.log(resultado.id)
          //console.log(resultado.data())
          const producto = resultado.data()
          //console.log(producto)
          setProduct(producto)
          setLoading(false)
        })
        .catch((error)=>{
          console.log(error)
        })

        // mockProduct(parseInt(id))
        // .then((r) =>setProduct(r))
      }, [id])

  return (
        <div>
       {loading?<p>cargando</p>:<ItemDetail product ={product}/>} 
       </div>
  )
}

export default ItemDetailContainer;