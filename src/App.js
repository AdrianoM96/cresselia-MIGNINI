
import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/Items/ItemListContainer';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <ItemListContainer greeting="LISTA DE ITEMS"></ItemListContainer>

   </div>
  );
}

export default App;
