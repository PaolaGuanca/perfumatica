import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { firestoreFetch } from '../Datos/firestoreFetch';
import '../App.css';

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    firestoreFetch(idCategory)
        .then(result => setDatos(result))
        .catch(err => console.log(err));
}, [idCategory]);

useEffect(() => {
  return (() => {
      setDatos([]);
  })
}, []);

return (
    <div className="list-container">           
        <ItemList items={datos} />   
    </div>
 );
};

  export default ItemListContainer;