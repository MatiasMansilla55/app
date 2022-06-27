import React from "react";
import { createContext, useState } from "react";



export const context = createContext()
console.log(context);

const Provider = context.Provider; 

export const MiProvider = ({children}) =>{

    const [cart, setCart] = useState([])
   

    //funciones customizadas:


    const addProduct = (item,quantity) => {
        if(isIncart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? {...product,quantity: product.quantity + quantity} : product
            }));
        }else {
            setCart([...cart,{...item, quantity}])
        }
        
    }
 

 
 
 
    //remover Producto
    const removeProduct = (id) => setCart(cart.filter(product => product.id !==id))
     
    

    //boton LimpiarCarrito:
    const clearCart = () => setCart([]);

    //esta en carrito?
    const isIncart = (id) => {
        return cart.find(product =>product.id ===id)? true:false

    }


    const valorDelContexto = {
        cart: cart,
        
        // setCarrito : setCarrito, //no se agrega el set, se agrega las funcones customizadas
        addProduct:addProduct,
        removeProduct: removeProduct,
        clearCart: clearCart,
        isIncart:isIncart
    }
    return(
        
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}





export default MiProvider;