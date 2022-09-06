import ItemCount from './ItemCount';
import '../App.css';

const onAdd = (quantity) => {
  alert("Agregados " + quantity + " ítems al carrito");
}

const ItemListContainer = () => {
    return (
      <div className="list-container">   
        <h1>Promociones</h1>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      </div>
    );
  };

  export default ItemListContainer;