import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from './Pages/Homepage/Homepage';
import MeuCarrinho from './Pages/MeuCarrinho/MeuCarrinho';
import MinhaConta from './Pages/MinhaConta/MinhaConta';
import Resumo from './Pages/Resumo/Resumo';
import Sobre from './Pages/Sobre/Sobre';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/meucarrinho' element={<MeuCarrinho />} />
          <Route path='/minhaconta' element={<MinhaConta />} />
          <Route path='/resumo' element={<Resumo />} />
          <Route path='/sobre' element={<Sobre />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
