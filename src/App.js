import './App.css';
import '../src/components/Styles/AppStyles.css';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import NavBar from '../src/components/NavBar/NavBar.js';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

    return (
    <div className="App">
      <NavBar/>
      <div>
      <ItemListContainer category={'Esta es mi categoría 1'}/>
      <ItemCount stock={10} initial={0} addCart={(quantity)=> console.log('cantidad agregada al carrito: '+quantity)}/>
      
      </div>

    </div>
  );
}

export default App;
