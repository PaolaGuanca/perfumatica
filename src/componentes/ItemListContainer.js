import React, { useState, useEffect } from 'react';

import ItemList from './ItemList';
import '../App.css';

const perfumes = [
  {
	  id: 1,
	  marca: "Marc Jacobs",
	  tamaño: "100ml",
	  img: "https://static.beautytocare.com/media/catalog/product/cache/global/image/650x650/85e4522595efc69f496374d01ef2bf13/m/a/marc-jacobs-perfect-eau-de-parfum-100ml.jpg",
	  precio: "$25850",
    stock: "15"
  },
  {
	  id: 2,
	  marca: "Azzaro",
	  tamaño: "100ml",
	  img: "https://cdn.fragrancenet.com/images/photos/600x600/342407.jpg",
	  precio: "$19090",
    stock: "10" 
  },
  {
	  id: 3,
	  marca: "Gucci",
	  tamaño: "100ml",
	  img: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1562764503/589186_99999_0099_002_100_0000_Light-Gucci-Mmoire-dune-Odeur-eau-de-parfum-100ml.jpg",
	  precio: "$16080",
    stock: "20"
  },
  {
	  id: 4,
	  marca: "Dolce & Gabbana",
	  tamaño: "100ml",
	  img: "https://beautysas.vteximg.com.br/arquivos/ids/175549-450-450/447902886263.jpg?v=637749973462900000",
	  precio: "$24420",
    stock: "15"
  },
];


const ItemListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() =>  {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(perfumes);
      }, 2000);
    });
    getData.then(res => setData(res));
  }, [])   


    return (
      <div className="list-container">   
        <h3>Promociones</h3>
        <ItemList data={data} />      
      </div>
    );
  };

  export default ItemListContainer;