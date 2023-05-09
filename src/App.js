import './App.css';
import Header from './Components/Header/Header';
import Logo from './Components/Header/Logo.png';
import { HiShoppingCart } from "react-icons/hi";
import './Pages/Sobre/Sobre';
import Sobre from './Pages/Sobre/Sobre';
import MeuCarrinho from './Pages/MeuCarrinho/MeuCarrinho';

function App() {
  return (
    <div className="App">
      <Header
      logo={Logo}
      name= "Nome do Site"
      conta= "Minha Conta"
      icone1= {<HiShoppingCart/>}
      carrinho= "Meu Carrinho"
      logout= "logout"

      />
      <Sobre/>
      <MeuCarrinho/>
    </div>
  );
}

export default App;
