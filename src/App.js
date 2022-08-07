import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/SimpleCart/simpleCart'
import Storefront from './Components/Storefront/storefront';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Storefront />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
