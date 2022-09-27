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


    const precioTotal = () => {       
        return cartList.reduce((preV, act) => preV + act.quantity * act.precio, 0);
    }

    const calcItemsQty = () => {
        return cartList.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0);
    }

    return(
        <CartContext.Provider value={{cartList, addItem, clear, isInCart, removeItem, precioTotal, calcItemsQty}}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;