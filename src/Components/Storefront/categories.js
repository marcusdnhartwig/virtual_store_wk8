import { connect } from 'react-redux';
import { selectedCategory } from '../../Store/categories.js'
import { Button, Typography } from '@mui/material';


const Category = ( props ) => {
  // individual state items
  const { categories, selectedCategory } = props

  return (
    <>
      <Typography variant="h4" component="div" gutterBottom>
        Our Categories
      </Typography>
      {categories.map((category, idx) => (
        <Button
          key={`category-${idx}`}
          variant="outlined"
          onClick={() => selectedCategory(category.name)}
        >{category.displayName}</Button>
      ))}
    </>
  );
}


const mapStateToProps = (state) => {

  return {
    categories: state.categoriesReducer.categories
  }
}

const mapDispatchToProps = {

  selectedCategory,
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);