import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <div>
        {
        items.length > 0
            ? items.map(item => <Item key={item.id} id={item.id} title={item.marca} size={item.tamaño} price={item.precio} pictureUrl={item.img} description={item.descripcion} stock={item.stock} />)
            : <p>Cargando...</p>
        }
        </div>
        );
}


export default ItemList;