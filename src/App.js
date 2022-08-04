import './App.css';
import Header from './Components/Header/header.js';
import Category from './Components/Storefront/categories.js';
import Product from './Components/Storefront/products';
import Footer from './Components/Footer/footer';
//import Simplecart from './Components/Cart/simplecart';

function App() {
  return (
    <>
      <Header />
      {/* <Simplecart/> */}
      <Category />
      <Product />
      <Footer />
    </>
  );
}

export default App;