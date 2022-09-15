import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import customFetch from "../Datos/customFetch";
import ItemDetail from "./ItemDetail";
import '../App.css';
const { perfumes } = require('../Datos/perfumes');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState([]);
    const { idItem } = useParams();
    
    useEffect(() =>  {
      customFetch(2000, perfumes.find(item => item.id === parseInt(idItem)))
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