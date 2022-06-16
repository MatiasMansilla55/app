import React from 'react';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { mockProduct } from '../../../utils/productos';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    const {id} = useParams()

    console.log(typeof id)
    useEffect(() =>{
        mockProduct(parseInt(id))
        .then((r) =>setProduct(r))
      }, [id])

  return (
        
        <ItemDetail product ={product}/>
    
  )
}

export default ItemDetailContainer;