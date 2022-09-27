import { useContext } from "react"
import { CartContext } from "./CartContext";
import '../App.css';

const Cart = () => {
    const contx = useContext(CartContext);

    return (
        <>
        {
          (contx.cartList.length > 0)
          ? <button type="button" class="btn btn-warning" onClick={contx.clear}>Vaciar carrito</button>
          : <h1>Carrito vacío</h1>
        }
        <div className="gridsCart">
        <div  id="carrito1">
        {
            contx.cartList.length > 0 &&
              contx.cartList.map(item =>                
                <ul>                    
                    <li><img src={item.img} alt="{item.marca}"></img></li>
                    <li><h2>{item.marca}</h2></li>    
                    <li>Precio: $ {item.precio}</li>                
                    <li>Cantidad: {item.quantity}</li>                    
                    <li>Total: $ {item.quantity * item.precio}</li>
                    <li><button type="button" class="btn btn-secondary" onClick={() => contx.removeItem(item.id)}>Remover</button></li>
               </ul>)
        }
        </div>
        <div  id="carrito0">
        {
                    contx.cartList.length > 0 &&
                      <ul>
                            <li><h2>Resumen de la compra</h2></li>
                            <li>Cantidad de perfumes: {contx.calcItemsQty()}</li>
                            <li>Total: $ {contx.precioTotal()}</li>
                            <li><button type="button" class="btn btn-secondary">Finalizar Compra</button></li>
                      </ul>
                }
                </div>
        </div>
        </>
    );
}

export default Cart;