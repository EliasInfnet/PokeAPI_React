import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home.screens';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/teste" element={<p>Teste</p>}/>
    </Routes>
  );
}

export default App;
