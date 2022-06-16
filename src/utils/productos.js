

const productos = [{
    id:1,
    title:'Producto 1',
    price: 200,
    description: 'Descripcion del producto 1',
    image: 'http://picsum.photos/200/300?image=1',
    categoryId: '1',
    stock: 4


},
{
    id:2,
    title: 'Producto 2',
    price: 50,
    description: 'description del producto 2',
    image: 'http://picsum.photos/200/300?image=2',
    categoryId: '2',
    stock: 5
},
{
    id:3,
    title: 'Producto 3',
    price: 100,
    descripcion: 'Descripcion del producto 3',
    image: 'http://picsum.photos/200/300?image=3',
    categoryId: '3',
    stock: 2
}
    
]
 
export const product= {
id:1,
title:'Producto 1',
price: 200,
description: 'Descripcion del producto 1',
image: 'http://picsum.photos/200/300?image=1',
categoryId: '1',
stock: 4
}

export const customFetch = () =>{
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve(productos);
        }, 2000)
    })
}

export const mockProduct = (id) =>{
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve(productos.find(prod =>prod.id===id))
        }, 2000)
    })
}

export const getProductByCategory = (categoryId) =>{
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve(productos.filter(prod => prod.categoryId===categoryId))
        }, 2000)
    })
}




export default productos;
