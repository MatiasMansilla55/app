import React from "react";
import { createContext, useState } from "react";



export const context = createContext([])
console.log(context);

const Provider = context.Provider; 

export const MiProvider = ({children}) =>{

    const [cart, setCart] = useState([])
    

 

    const copia= [...cart]
 
    const addProduct = (item,quantity) => {
         if(isIncart(item.id)) {
             setCart(copia.map(product => {
                 return product.id === item.id ? {...product,quantity: product.quantity + quantity} : product
         }));
         }else {
             setCart([...cart,{...item, quantity}])
         }
 
    }
 

 
    const removeProduct = (id) => setCart(copia.filter(product => product.id !==id))
  
     
    

    
    const clearCart = () => setCart([]);

 
    const isIncart = (id) => {
        return copia.find(product =>product.id ===id)? true:false

    }

    
    const totalPrice = () => {
        
        return copia.reduce((prev,act) => prev + act.quantity*act.price,0);
    }

    const totalProducts = () =>{
       return copia.reduce((acumulador, productoActual) => acumulador + productoActual.quantity,0);
    } 


    const valorDelContexto = {
       
        addProduct:addProduct,
        removeProduct: removeProduct,
        clearCart: clearCart,
        isIncart:isIncart,
        totalPrice: totalPrice,
        totalProducts:totalProducts,
        copia: copia
    }
    return(
        
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}





export default MiProvider;