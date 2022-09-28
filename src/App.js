import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About';
import BlockChain from './Component/BlockChain';
import Coin from './Component/Coin';
import Contact from './Component/Contact';
import FAQ from './Component/FAQ';
import Main from './Component/Main';

function App() {
  return (
    <>

    <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/faq" element={<FAQ/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/blockchain" element={<BlockChain/>} />
        <Route exact path="/coin/:coinId" element={<Coin/>} />
        
      </Routes>
    </>
  );
}

export default App;
