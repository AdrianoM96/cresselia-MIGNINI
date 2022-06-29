
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Cart from './components/Cart/Cart'
import {CartContextProvider} from './context/CartContext'
import Checkout from './components/Checkout/Checkout'
import './App.css'

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<ItemListContainer greeting='Catalogo' />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos por categoria" />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='*' element={<h1 className='error404'>Pagina no encontrada</h1>} />
            <Route path='/checkout' element={<Checkout/>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );

}

export default App;
