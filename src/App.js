
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemsContainer/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemsDetails/ItemDetailContainer/ItemDetailContainer';
import  './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Cart from './components/Cart/Cart'


function App() {
  return (
    
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='*' element={<h1 className='error404'>Pagina no encontrada</h1>}> </Route>
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
