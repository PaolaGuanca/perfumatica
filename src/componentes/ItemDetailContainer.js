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
      descripcion: "Perfect de Marc Jacobs es una fragancia de la familia olfativa Ámbar Floral para Mujeres. Esta fragrancia es nueva. Perfect se lanzó en 2020. La Nariz detrás de esta fragrancia es Domitille Michalon Bertier. Las Notas de Salida son ruibarbo y narciso; la Nota de Corazón es leche de almendras; las Notas de Fondo son cachemira y cedro.",
    stock: "15"
  },
  {
      id: 2,
      marca: "Azzaro",
      tamaño: "100ml",
      img: "https://cdn.fragrancenet.com/images/photos/600x600/342407.jpg",
      precio: "$19090",
      descripcion: "Wanted Girl de Azzaro es una fragancia de la familia olfativa Ámbar Floral para Mujeres. Wanted Girl se lanzó en 2019. Wanted Girl fue creada por Dominique Ropion, Fanny Bal, Loc Dong y Jean-Christophe Herault. Las Notas de Salida son flor de jengibre, flor de azahar del naranjo, granada y pimienta rosa; las Notas de Corazón son dulce de leche y datura; las Notas de Fondo son haba tonka, pachulí y vetiver de Haití.",
    stock: "10" 
  },
  {
      id: 3,
      marca: "Gucci",
      tamaño: "100ml",
      img: "https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1562764503/589186_99999_0099_002_100_0000_Light-Gucci-Mmoire-dune-Odeur-eau-de-parfum-100ml.jpg",
      precio: "$16080",
      descripcion: "Mémoire d’une Odeur de Gucci es una fragancia de la familia olfativa para Hombres y Mujeres. Mémoire d’une Odeur se lanzó en 2019. La Nariz detrás de esta fragrancia es Alberto Morillas. Las Notas de Salida son manzanilla y almendra amarga; las Notas de Corazón son almizcle, jazmín de la India y jazmín; las Notas de Fondo son sándalo, cedro y vainilla.",
    stock: "20"
  },
  {
      id: 4,
      marca: "Dolce & Gabbana",
      tamaño: "100ml",
      img: "https://beautysas.vteximg.com.br/arquivos/ids/175549-450-450/447902886263.jpg?v=637749973462900000",
      precio: "$24420",
      descripcion: "The One for Men Eau de Parfum de Dolce&Gabbana es una fragancia de la familia olfativa Amaderada Especiada para Hombres. The One for Men Eau de Parfum se lanzó en 2015. La Nariz detrás de esta fragrancia es Olivier Polge. Las Notas de Salida son toronja (pomelo), cilantro y albahaca; las Notas de Corazón son jengibre, cardamomo y flor de azahar del naranjo; las Notas de Fondo son ámbar, tabaco y cedro.",
    stock: "15"
  },
];


const ItemDetailContainer = () => {
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
  
    export default ItemDetailContainer;