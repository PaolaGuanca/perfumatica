import { useState } from 'react';
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';
import { useContext } from "react"
import { CartContext } from "./CartContext";
import '../App.css';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const contx = useContext(CartContext);

    const onAdd = (quantity) => {
        alert("Agregados " + quantity + " perfumes al carrito");
        setItemCount(quantity);
        contx.addItem(item, quantity);
      }
      
      return (
        <>
        {
         item && item.img
            ? 
        <div className="perf card mat-card">      
        <div class="imgCont">
        <img src={item.img} alt={item.marca} />
        </div>     
        <h1>{item.marca}</h1>
        <p>{item.tamaño}</p>       
        <h3>{item.precio}</h3><br/>
        <p>{item.descripcion}</p><br/>
        {
          itemCount === 0
          ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
          : <Link to='/cart' >Carrito</Link>
        }
        
        <p>Stock: {item.stock}</p>
        </div>
        : <p>Cargando...</p>        
        }
        </>
);	
}

export default ItemDetail;