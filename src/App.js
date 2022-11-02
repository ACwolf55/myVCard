
import './App.css';
import {Routes,Route} from 'react-router-dom'
import { Home } from './Home';
import { Graphico } from './Graphico';

function App() {
  return (
    <div className="App">

<Routes>
    <Route path='/' element={ <Home />} />
    <Route path='/graphico' element={ <Graphico/> } />
  </Routes>
    </div>
  );
}

export default App;
