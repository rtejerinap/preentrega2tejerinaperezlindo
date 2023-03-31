import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemLisContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element = {<ItemListContainer greeting={'Listado de todos los Productos'} />}/>
          <Route path='/tipo/:tipoID' element = {<ItemListContainer greeting={'Listado por Tipo'} />}/>
          <Route path='/item/:itemId' element={ <ItemDetailContainer />}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
