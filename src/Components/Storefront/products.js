import { connect } from 'react-redux';
import { Card, Box, Typography } from '@mui/material';


const Product = (props) => {

  let productList = props.products.filter(product => product.category === props.activeCategory);

  //REVIEW
  return (
    <>
      {productList.map((products, idx) => (
        <Box
          key={`product-${idx}`}
          sx={{
            display: 'flex',
            width: 600,
            height: 200,
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
              flexDirection: 'row',
              textAlign: 'center'
            }}
          >
            <Typography variant="h6" component="div" gutterBottom>
              {products.name}
            </Typography>
            <Typography
              variant="body1"
              component="div"
              gutterBottom
              sx={{
                textAlign: 'left'
              }}
            >
              {products.description}
            </Typography>
            <Typography
              variant="body1"
              component="div"
              gutterBottom
              sx={{
                textAlign: 'left'
              }}
            >
              {products.price}
            </Typography>
          </Card>
        </Box>
      ))}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.products,
    activeCategory: state.categoriesReducer.activeCategory
  }
}


export default connect(mapStateToProps)(Product);