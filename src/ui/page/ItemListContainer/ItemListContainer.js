import React from 'react'
import ItemList from '../ItemList/ItemList';
import { useEffect, useState} from 'react'
import {customFetch} from '../../../utils/productos';
import {getProductByCategory} from '../../../utils/productos';
import {useParams} from "react-router-dom";
import '../ItemListContainer/ItemListContainer.css'
// import {db} from "../../../api/firebase/config/firebase"
// import {getDocs,collection} from "firebase/firestore"
//getDocs : Sirva para traer muchos documentos en una coleccon
//getDoc: Sirve para traer solo 1 docuementos en base a su id
//doc: Referencia a un docuemento de coleccion
//query
//where
//collection

function ItemListContainer(props) {
    const [items, setItems] = useState([])


  

    const { categoryId } = useParams()
    console.log(typeof categoryId)

    useEffect(() => {
      //1)Necesto la referencia a la coleccion
    // const collectionProductos= collection(db,"productos")
    //2)hago la consulta  
      //  const consulta= getDocs(collectionProductos)
      //  console.log(consulta)

      //  consulta
      //  .then((resultado) =>{
        //la cosulta de firebase retorna un objeto que adentro tienen un array (docs) el cual tiene un representacion de los productos
      //   console.log(resultado.docs)
      //   const productos_mapeados=resultado.docs.map(referencia =>{
      //     console.log(referencia.id)
      //     console.log(referencia.data()) //seria como el response.json()
      //     const aux= referencia.data();

      //     aux.id = referencia.id;
      //     return aux;
      //   })
      //   setItems(productos_mapeados);
      //   setLoading(false)//cambio de estado del seteo
      //  })
      //  .catch((error)=>{
      //   console.log(error)
      //  })
      if(!categoryId) {
        customFetch().then(response => {
          setItems(response)
          })
      } else {
          getProductByCategory(categoryId).then(response => {
            setItems(response)
          })
      }
  }, [categoryId])

  

    if(items.length>0){
  return (
      <section className='products-container'>
       <ItemList products={items}/>
      </section>
  )
}
  else{
  return (
    <div>
    <p>Cargando...</p>
      <ItemList products={items}/>
    </div>
  )
  }
}

export default ItemListContainer