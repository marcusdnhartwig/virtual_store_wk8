import axios from 'axios';


const initialState = [
    {
      category: 'MAPS',
      name: 'USGS Topo Maps',
      img: 'img_apple',
      description: 'Know where you are and be safe getting to where you are going with these maps',
      price: '16.99',
      inventoryCount: 50,
    },
    {
      category: 'BACKPACKS',
      name: 'HLMG 4500 Porter',
      img: "4500",
      description: 'Make a big plan, and then go bigger with the 4400 Porter. For four-season missions where resupply points are less frequent, and bulkier gear or equipment is required, the 4400 can carry it all.',
      price: '499.99',
      inventoryCount: 50,
    },
    {
      category: 'TENTS',
      name: 'Copper Spur HV UL2',
      img: 'Copper Spur',
      description: 'THREE SEASON, FREE STANDING, ULTRALIGHT TENT, Already one of our best-selling, full-featured, ultralight backpacking tents, the Copper Spur HV UL2 2 person tent just got better.',
      price: '599.99',
      inventoryCount: 50,
    }
  ];


export default function productReducer(state = initialState, action) {

  let { type, payload } = action;
  switch (type) {
    case 'ADD_CART':
      return state.map(product => {
        if(product.name === payload.name){
          product.inStock = product.inStock - 1
        }
        return product
      })
      // NEED TO ADD PUT REQUEST TO UPDATE INVENTORY
    case 'REMOVE_FROM_CART':
      return state.map(product => {
        if(product.name === payload.name){
          product.inStock = product.inStock + 1
        }
        return product
      })

    case 'GET_PRODUCTS':
      return payload.results
  
    default:
      return state
  }
}

export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get('https://mdnh-virtual-store-api.herokuapp.com/api/v1/products');

  dispatch(setProducts(response.data))
}

export const setProducts = (data) => {
  return {
    type: 'GET_PRODUCTS',
    payload: data,
  }
}