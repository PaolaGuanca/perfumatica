import { createContext, useState } from 'react'

export const CartContext = createContext();

const CartContextProvider =({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (perfumes, quantity) => {
        setCartList([...cartList, perfumes]);

    }

    const clear = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id));
    }

    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem}}  >
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;