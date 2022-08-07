import './storefront.css'
import Header from '../Header/header';
import Category from '../Categories/category';
import Product from '../Products/products';
import Footer from '../Footer/footer';

const Storefront = () => {

  return (
    <div className='storefront'>
        <Header />
        <Category />
        <Product />
        <Footer />
    </div>
  )
};


export default Storefront;

