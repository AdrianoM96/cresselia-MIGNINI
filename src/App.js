
import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/ItemDetails/ItemDetailContainer';
import  './styles/estilos.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {
  return (
    
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="LISTA DE ITEMS" />}></Route>
            <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
