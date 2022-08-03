import './App.css';
import Header from './Components/Header/header.js';
import Category from './Components/Storefront/categories.js';
import Product from './Components/Storefront/products';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <>
      <Header />
      <Category />
      <Product />
      <Footer />
    </>
  );
}

export default App;