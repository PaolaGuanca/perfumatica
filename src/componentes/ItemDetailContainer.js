import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { firestoreFetchOne } from "../Datos/firestoreFetch";
import '../App.css';

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();
    
    useEffect(() =>  {
      firestoreFetchOne(idItem)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);   
  
  
      return (
        <div className="list-container">             
          <ItemDetail item={dato} />      
        </div>
      );
    };
  
    export default ItemDetailContainer;