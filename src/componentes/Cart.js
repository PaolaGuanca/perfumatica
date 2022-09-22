import { useContext } from "react"
import { CartContext } from "./CartContext";

const Cart = () => {
    const contx = useContext(CartContext);

    return (
        <>
        <button onClick={contx.clear}>Borrar Todo </button>
        {
            contx.cartList.map(item =>
               <li>{item.marca} 
               <button onClick={() => contx.removeItem(item.id)}>Borrar Producto</button>
               </li>)
        }        
        </>
    );
}

export default Cart;