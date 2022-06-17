
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemsContainer/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemsDetails/ItemDetailContainer/ItemDetailContainer';
import  './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Cart from './components/Cart/CartContainer/Cart'
import CartContextProvider from './context/CartContext'
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<ItemListContainer greeting='Catalogo' />}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos por categoria" />}></Route>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='*' element={<h1 className='error404'>Pagina no encontrada</h1>}> </Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );

}

export default App;
