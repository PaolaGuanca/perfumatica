import React from 'react';
import ItemCount from './ItemCount';
import '../App.css';

const onAdd = (quantity) => {
    alert("Agregados " + quantity + " perfumes al carrito");
  }

const Item = ({ info }) => {
    return (
        <div class="perf card mat-card">
        <img src={info.img} alt={info.marca} />
        <h1>{info.marca}</h1>
        <p>{info.tamaño}</p>
        <h3>{info.precio}</h3>
        <ItemCount stock={info.stock} initial={1} onAdd={onAdd} />
        <p>Stock: {info.stock}</p>
        </div>
);	
}

export default Item;