import './header.css'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

const Header = (props) => {

  return (
    <div className='header'>
      <h1>Electronics Store</h1>
      <Link 
        default to="/" 
        style={{ margin: '25px' }}
      >HOME</Link>
      <Link
        default to="/cart"
        style={{ margin: '25px' }}
      >
        <IconButton
        color='success'
        >
          <h6>CART ({props.cart.length})</h6>
          <ShoppingCartIcon />
        </IconButton>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.productsRed,
    cart: state.cartRed
  }
}
export default connect(mapStateToProps)(Header);