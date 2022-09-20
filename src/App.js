import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import NavBar from './componentes/NavBar'
import Cart from './componentes/Cart'
import './App.css';

const App = () => {
  return (
    <BrowserRouter>     
     <NavBar />
       <Routes>
         <Route path='/' element={<ItemListContainer />} />
         <Route path='/category/:idCategory' element={<ItemListContainer />} />
         <Route path='/item/:idItem' element={<ItemDetailContainer />} />
         <Route path='/Cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>   
  );
}

export default App;

