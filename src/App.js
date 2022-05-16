
import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/ItemDetails/ItemDetailContainer';
import  './styles/estilos.css'
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <ItemListContainer greeting="LISTA DE ITEMS"></ItemListContainer>
      <ItemDetailContainer></ItemDetailContainer>
   



   </div>
  );
}

export default App;
