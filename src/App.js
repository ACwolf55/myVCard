
import './App.css';
import {Routes,Route} from 'react-router-dom'
import { Graphico } from './Cards/Graphico';
import { Plumber } from './Cards/Plumber';
import { Pokedon } from './Cards/Pokedon';
import { Frenchys } from './Cards/Frenchys';
import {Home} from './Home'

function App() {
  return (
    <div className="App">

<Routes>
    <Route path='/' element={ <Home />} />
    <Route path='/graphico' element={ <Graphico/> } />
    <Route path='/1800plumber' element={ <Plumber/> } />
    <Route path='/pokedon' element={<Pokedon/>} />
    <Route path='/frenchys' element={<Frenchys/>} />
  </Routes>
    </div>
  );
}

export default App;
