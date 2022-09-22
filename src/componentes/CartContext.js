import { createContext, useState } from 'react'
export const CartContext = createContext();

const CartContextProvider =({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (perfumes, newQuantity) => {        
        const newCartList = cartList.filter(item => item.id !== perfumes.id);
        newCartList.push({...perfumes, quantity: newQuantity }) ;
        setCartList(newCartList);
    }

    const clear = () => {
        setCartList([]);
    }

    const isInCart = (id) =>  cartList.find(item => item.id === id) ? true : false;

    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id));
    }

    return(
        <CartContext.Provider value={{cartList, addItem, clear, isInCart, removeItem}}  >
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;