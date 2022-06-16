import React from 'react'
import ItemList from '../ItemList/ItemList';
import { useEffect, useState} from 'react'
import {customFetch} from '../../../utils/productos';
import {getProductByCategory} from '../../../utils/productos';
import {useParams} from "react-router-dom";
import '../ItemListContainer/ItemListContainer.css'

function ItemListContainer(props) {
    const [items, setItems] = useState([])

    const { categoryId } = useParams()
    console.log(typeof categoryId)

    useEffect(() => {
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