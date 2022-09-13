import './App.css';
//import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import NavBar from './componentes/NavBar'

const App = () => {
  return (
    <header>     
     <NavBar />
    {/*<ItemListContainer />*/}
     <ItemDetailContainer />
    </header>   
  );
}

export default App;

