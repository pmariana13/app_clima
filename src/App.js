import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Nosotras from './pages/Nosotras';
import Contacto from './pages/Contact';
import Inicio from './pages/Inicio';
import NavBarExample from './components/NavBar';
import Principal from './pages/Principal';


function App() {
  return (
    <div className="App">
      
<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBarExample /> }>
    <Route index element={ <Principal /> } />
    <Route path='Inicio' element={ <Inicio /> } />
    <Route path='nosotras' element={ <Nosotras /> } />
    <Route path='contacto' element={ <Contacto /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>


    </div>
  );
}

export default App;