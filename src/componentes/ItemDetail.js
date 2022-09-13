import ItemCount from './ItemCount';
import React from 'react';
import '../App.css';

const ItemDetail = ({ info }) => {

    const onAdd = (quantity) => {
        alert("Agregados " + quantity + " perfumes al carrito");
      }
      
      return (
        <div className="perf card mat-card">
        <img src={info.img} alt={info.marca} />
        <h1>{info.marca}</h1>
        <p>{info.tamaño}</p>       
        <h3>{info.precio}</h3>
        <p>{info.descripcion}</p>
        <ItemCount stock={info.stock} initial={1} onAdd={onAdd} />
        <p>Stock: {info.stock}</p>
        </div>
);	
}

export default ItemDetail;