
import Navbar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemsContainer/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemsDetails/ItemDetailContainer/ItemDetailContainer';
import  './styles/estilos.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {
  return (
    
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}></Route>
            <Route path='*' element={<h1 className='error404'>Pagina no encontrada</h1>}> </Route>
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
