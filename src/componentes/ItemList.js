import ItemDetail from './ItemDetail';
import React from 'react';

const ItemList = ({ data = [] }) => {
    return (
        data.map(perfumes => <ItemDetail key={perfumes.id} info={perfumes} />)
        );
}


export default ItemList;