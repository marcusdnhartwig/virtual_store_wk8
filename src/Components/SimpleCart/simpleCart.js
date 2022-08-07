
import { connect } from 'react-redux';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Typography, Button, Card } from '@mui/material';
import { removeFromCart } from '../../Store/actions'
import { useDispatch } from 'react-redux';

const Cart = (props) => {

  let dispatch = useDispatch();

  return (
    <>
      <Header />
      <h3>Your Cart</h3>
      {props.cart.map((cart, idx) => (
        <Card
          key={`cart-${idx}`}
          sx={{
            margin: '10px',
            padding: '30px',
            width: 350,
            height: 'auto',
            flexDirection: 'row',
          }}
        >
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            sx={{
              fontSize: 12
            }}
          >
            {cart.name}
          </Typography>
          <Typography
            variant="body1"
            component="div"
            gutterBottom
            sx={{
              textAlign: 'left',
              fontSize: 12
            }}
          >
            ${cart.price}
          </Typography>
          <Typography
            variant="body1"
            component="div"
            gutterBottom
            sx={{
              textAlign: 'left'
            }}
          >
          </Typography>
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={() => dispatch(removeFromCart(cart))}
          >Delete Item</Button>
        </Card>
      ))}
      <Footer />

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