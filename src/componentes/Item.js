import React from 'react';
import ItemCount from './ItemCount';
import '../App.css';

const Item = ({ info }) => {
    return (
        <div class="perf card mat-card">
          <div class="imgCont">
        </div>
        <h1>{info.marca}</h1>                
        </div>
);	
}

export default Item;