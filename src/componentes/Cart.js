import { useContext } from "react"
import { CartContext } from "./CartContext";
import '../App.css';

const Cart = () => {
    const contx = useContext(CartContext);

    return (
        <>        
        {
            contx.cartList.map(item =>
                <ul className="carrito">
                    <li><img src={item.img} alt="{item.marca}"></img></li>
                    <li><h2>{item.marca}</h2></li>
                    <li>{item.precio}</li>                    
                    <li>Cantidad: {item.quantity}</li>
                    <li><button type="button" class="btn btn-secondary" onClick={() => contx.removeItem(item.id)}>Remover</button></li>
               </ul>)
        } 
        <button type="button" class="btn btn-warning" onClick={contx.clear}>Vaciar carrito</button>       
        </>
    );
}

export default Cart;