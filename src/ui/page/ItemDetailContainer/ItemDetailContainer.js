import React from 'react';
import { useEffect, useState} from 'react';
import { MockProduct } from '../../../utils/productos';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    useEffect(() =>{
        MockProduct()
        .then((r) =>setProduct(r))
      }, [])

  return (
    
        <ItemDetail product ={product}/>
    
  )
}

export default ItemDetailContainer;