import { connect } from 'react-redux';
import { Card, Box, Typography, CardActions, Button } from '@mui/material';
import { addToCart } from '../../Store/actions'
import { getProducts } from '../../Store/products'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './products.css';

const Product = (props) => {

  console.log('productProps', props);

  let dispatch = useDispatch();

  let productList = props.products.filter(product => product.category === props.activeCategory.activeCategory);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className='products'>
      {productList.map((item, idx) => (
        <Box
          key={`product-${idx}`}
          sx={{
            display: 'flex',
            margin: '25px',
            flexDirection: 'row',
            textAlign: 'center'
          }}
        >
          <Card
            raised
            sx={{
              margin: '10px',
              padding: '30px',
              width: 350,
              height: 'auto',
              flexDirection: 'row',
              textAlign: 'center'
            }}
          >
            <Typography
              variant="h6"
              component="div"
              gutterBottom
              sx={{
                fontSize: 18
              }}
            >
              {item.name}
            </Typography>
            <Typography
              variant="body1"
              component="div"
              gutterBottom
              sx={{
                textAlign: 'left',
                fontSize: 14
              }}
            >
              {item.description}
            </Typography>
            <Typography
              variant="body1"
              component="div"
              gutterBottom
              sx={{
                textAlign: 'left'
              }}
            >
              Price: ${item.price}
            </Typography>
            <Typography
              variant="body1"
              component="div"
              gutterBottom
              sx={{
                textAlign: 'left'
              }}
            >
              QTY: {item.inStock}
            </Typography>
            <CardActions>
              <Button
                size="small"
                variant="contained"
                color="success"
                onClick={() => dispatch(addToCart(item))}
              > + Add to Cart 
              </Button>
            </CardActions>
          </Card>
        </Box>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.productsRed,
    activeCategory: state.activeCategory
  }
}

const mapDispatchToProps = {

  addToCart

}


export default connect(mapStateToProps, mapDispatchToProps)(Product);