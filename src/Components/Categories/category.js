import { connect, useDispatch } from 'react-redux';
import { selectedCategory } from '../../Store/actions'
import { getCategories } from '../../Store/categories.js'
import { Button, Typography } from '@mui/material';
import { useEffect } from 'react';


const Category = ( props ) => {

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      <Typography variant="h4" component="div" gutterBottom>
        Browse our Categories
      </Typography>
      {props.categories.map((category, idx) => (
        <Button
          key={`category-${idx}`}
          variant="outlined"
          onClick={() => props.selectedCategory(category.name)}
        >{category.name}</Button>
      ))}
    </>
  );
}


const mapStateToProps = (state) => {
  return {
    categories: state.categoriesRed
  }
}

const mapDispatchToProps = {

  selectedCategory,
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);