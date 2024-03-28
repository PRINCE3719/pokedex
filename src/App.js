import { Route, Router, Routes } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import Main from './Components/Main';
import Details from './Components/Details';

function App() {
 return (
    <>
  <Routes>
    <Route exact path="/" element={<Main/>} />
    <Route path="/details/:pokemonId" element={<Details/>} />
    </Routes>
      
        </>
 );
}

export default App;
