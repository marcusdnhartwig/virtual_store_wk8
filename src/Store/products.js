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

function productReducer(state = initialState, action) {
  let { type, payload } = action;

  console.log('payload: ', payload);
  console.log('state: ', state);

  switch (type) {

    case 'ADD_TO_CART':
      return state.map(product => {
        if (product.name === payload.name) {
          product.inventory = product.inventory - 1;
          product.inCart = product.inCart + 1;
        }
        console.log('product: ', product);
        return product;
      });

    default:
      return state;

  }
}

export const changeCategory = (category) => {

  return {
    type: 'CHANGE',
    payload: category,
  };
};

export const addToCart = (product) => {

  console.log('add to cart product', product);

  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
};

// add function here to return "ITEM_ADDED" action, to be sure state is updated before being updated by cartReducer?

export default productReducer;


//REVIEW
// export default function productsReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return state.map(product => {
//         if(product.name === action.payload.name){
//           product.inventory = product.inventory - 1;
//         }
//         return product
//       });
//     case 'REMOVE_FROM_CART':
//       return state.map(product => {
//         if(product.name === action.payload.name){
//           product.inventory = product.inventory + 1;
//         }
//         return product
//       });
//     default:
//       return state;
//   }
// }