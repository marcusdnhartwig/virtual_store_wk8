const initialState = {
  products: [
    {
      category: 'Maps',
      name: 'USGS Topo Maps',
      description: 'USGS Topo maps dated from 1967-2010',
      price: '$16.99',
      inventoryCount: 100,
    },
    {
      category: 'Tents',
      name: 'Big Agnes',
      description: 'The Big Agnes Copper Spur is the go to tent for all season hiking',
      price: '$549.99',
      inventoryCount: 7,
    },
    {
      category: 'Backpacks',
      name: 'HLMG 4500',
      description: 'The HLMG 4500 is the lightest backpack on the market',
      price: '$399.99',
      inventoryCount: 10,
    },
  ],
}

//REVIEW
function productReducer(state = initialState, action) {

  let { type, payload } = action;
  switch (type) {
    default:
      return state
  }
}

export const activeProducts = (products) => {
  return {
    type: 'CATEGORY PRODUCTS',
    payload: products,
  }
}

export default productReducer;