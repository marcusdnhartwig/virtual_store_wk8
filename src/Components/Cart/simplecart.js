import { connect } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import { Box, Typography, Button } from '@mui/material';
import { removeFromCart } from '../../Store/cart.js'
import { useDispatch } from 'react-redux';

const Cart = (props) => {

  let dispatch = useDispatch();

  return (
    <>
      <IconButton>
        <h6>Cart ({props.cart.length})</h6>
        <ShoppingCartIcon />
      </IconButton>
      {props.cart.map((cart, idx) => (
        <Box
          key={`cart-${idx}`}
          sx={{
            display: 'flex',
            width: 200,
            height: 100,
            margin: '25px',
            flexDirection: 'row',
            textAlign: 'center'
          }}
        >
          <Typography variant="body1" component="div" gutterBottom>
            {cart.name}
            {cart.description}
            {cart.price}
          </Typography>
          <Button
            size="small"
            variant="contained"
            onClick={() => dispatch(removeFromCart(cart))}
          >Delete Item</Button>
        </Box>
      ))}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.productsRed,
    cart: state.cartRed
  }
}

export default connect(mapStateToProps)(Cart);