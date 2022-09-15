import ItemCount from './ItemCount';
import React from 'react';
import '../App.css';

const ItemDetail = ({ item }) => {

    const onAdd = (quantity) => {
        alert("Agregados " + quantity + " perfumes al carrito");
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
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        <p>Stock: {item.stock}</p>
        </div>
        : <p>Cargando...</p>        
        }
        </>
);	
}

export default ItemDetail;