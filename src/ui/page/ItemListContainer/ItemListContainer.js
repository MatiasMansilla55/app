import React from 'react'
import ItemList from '../ItemList/ItemList';
import { useEffect, useState} from 'react'
// import {customFetch} from '../../../utils/productos';
// import {getProductByCategory} from '../../../utils/productos';
import {useParams} from "react-router-dom";
import '../ItemListContainer/ItemListContainer.css'
import {db} from "../../../api/firebase/config/firebase"
import {getDocs,collection,query, where} from "firebase/firestore"
//getDocs : Sirva para traer muchos documentos en una coleccon
//getDoc: Sirve para traer solo 1 docuementos en base a su id
//doc: Referencia a un docuemento de coleccion
//query: nos permite hacer el filtro de la consulta
//where:
//collection

function ItemListContainer(props) {
    const [items, setItems] = useState([])
    // const [loading, setLoading] = useState(true);
    const { categoryId } = useParams()


  

    // console.log(typeof categoryId)

    useEffect(() => {
      // 1)Necesto la referencia a la coleccion
    const collectionProductos= collection(db,"productos")
    // const filtroDeLaConsulta = query(collectionProductos,where("categoryId","==",categoryId))
    // const filtroDeLaConsulta = query(collectionProductos);
    // 2)hago la consulta  
      //  const consulta= getDocs(filtroDeLaConsulta)
      //  console.log(consulta)
    

       if(categoryId){
         const queryFilter =query(collectionProductos,where('category','==',categoryId))
         
        getDocs(queryFilter)
        
        .then(res =>setItems(res.docs.map(product =>({ id:product.id, ...product.data()}))))
       }else{
        getDocs(collectionProductos)
        .then(res=> setItems(res.docs.map(product =>({id:product.id, ...product.data()}))))
      
       }



      // consulta
      //  .then((resultado) =>{
      // //  la cosulta de firebase retorna un objeto que adentro tienen un array (docs) el cual tiene un representacion de los productos
      //   // console.log(resultado.docs)
      //   const productos_mapeados=resultado.docs.map(referencia =>{
      //     console.log(referencia.id)
      //     console.log(referencia.data()) //seria como el response.json()
      //     const aux= referencia.data();

      //     aux.id = referencia.id;
      //     return aux;
      //   })
      //   setItems(productos_mapeados);
      //   // setLoading(false)//cambio de estado del seteo
      //  })
   
    

    
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