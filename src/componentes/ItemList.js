import Item from './Item';
import React from 'react';

const ItemList = ({ data = [] }) => {
    return (
        data.map(perfumes => <Item key={perfumes.id} info={perfumes} />)
        );
}


export default ItemList;