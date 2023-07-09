import './App.css';
import '../src/components/Styles/AppStyles.css';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import NavBar from '../src/components/NavBar/NavBar.js';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

    return (
    <div className="App">
      <NavBar/>
      <div className='CardsContainer'>
      <ItemListContainer name={'Aprende los números'} description={'niños entre 2 a 6 años'} price={'$10.000'} img={'https://i.pinimg.com/474x/7e/26/72/7e267283514d5d9bee83a4d871b4fbd9.jpg'}/>
      <ItemListContainer name={'Las vocales'} description={'niños entre 3 a 8 años'} price={'$15.000'} img={'https://i.pinimg.com/564x/5c/81/56/5c81561046195f12a78b8f627acfbd04.jpg'}/>
      <ItemCount stock={10} initial={0} addCart={(quantity)=> console.log('cantidad agregada al carrito: '+quantity)}/>
      
      </div>

    </div>
  );
}

export default App;
