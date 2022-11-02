
import './App.css';
import {Routes,Route} from 'react-router-dom'
import { Home } from './Home';
import { Graphico } from './Graphico';
import { Plumber } from './Plumber';

function App() {
  return (
    <div className="App">

<Routes>
    <Route path='/' element={ <Home />} />
    <Route path='/graphico' element={ <Graphico/> } />
    <Route path='/1800plumber' element={ <Plumber/> } />
  </Routes>
    </div>
  );
}

export default App;
