import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Provider from './Context/Provider';

import Header from './Components/Header/Header';

import Homepage from './Pages/Homepage/Homepage';
import MeuCarrinho from './Pages/MeuCarrinho/MeuCarrinho';
import MinhaConta from './Pages/MinhaConta/MinhaConta';
import Resumo from './Pages/Resumo/Resumo';
import Sobre from './Pages/Sobre/Sobre';

function App() {
  return (
    <Provider>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/MeuCarrinho' element={<MeuCarrinho />} />
            <Route path='/MinhaConta' element={<MinhaConta />} />
            <Route path='/Resumo' element={<Resumo />} />
            <Route path='/Sobre' element={<Sobre />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
