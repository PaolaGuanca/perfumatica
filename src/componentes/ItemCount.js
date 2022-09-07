import { useState } from 'react';
import '../App.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial);  

    const handleClickAdd = () => {        
        setContador(contador + 1);
        }    

        const handleClickSubt = () => {
        setContador(contador - 1);
    }

    return (
        <div className="stock-container">  
            <div className="item-count">         
            <button type="button" class="btn btn-success" disabled={contador >= stock} onClick={handleClickAdd}>+</button>
            <span>{contador}</span>        
            <button type="button" class="btn btn-success" disabled={contador <= 1} onClick={handleClickSubt}>-</button>
            <button type="button" class="btn btn-secondary" disabled={stock <= 0} onClick={() => onAdd(contador)}>Agregar al Carrito</button>          
            </div>
        </div>
    );
}

export default ItemCount;