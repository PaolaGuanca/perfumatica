import { useContext } from "react"
import { CartContext } from "./CartContext";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../Datos/firebaseConfig';
import '../App.css';

const Cart = () => {
    const contx = useContext(CartContext);

    const createOrder = () => {
      const itemsForDB = contx.cartList.map(item => ({
        id: item.id,
        title: item.marca,
        price: item.precio
      }));
  
      contx.cartList.forEach(async (item) => {
        const itemRef = doc(db, "perfumes", item.id);
        await updateDoc(itemRef, {
          stock: increment(-item.quantity)
        });
      });
  
      let order = {
        buyer: {
          name: "Pepe Sanchez",
          email: "pepe@gmail.com",
          phone: "555348963"
        },
        total: contx.calcTotal(),
        items: itemsForDB,
        date: serverTimestamp()
      };
    
      console.log(order);
      
      const createOrderInFirestore = async () => {
        // Add a new document with a generated id
        const newOrderRef = doc(collection(db, "orders"));
        await setDoc(newOrderRef, order);
        return newOrderRef;
      }
    
      createOrderInFirestore()
        .then(result => alert('Tu orden ha sido creada con éxito con el siguiente número de ID:\n\n\nOrder ID: ' + result.id + '\n\n'))
        .catch(err => console.log(err));
    
      contx.clear();
    
    }

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
                            <li><button type="button" class="btn btn-secondary" onClick={createOrder}>Finalizar Compra</button></li>
                      </ul>
                }
                </div>
        </div>
        </>
    );
}

export default Cart;