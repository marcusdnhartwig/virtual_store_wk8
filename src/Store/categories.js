import axios from 'axios';


const initialState = [
  {
    name: 'MAPS',
    displayName: 'MAPS',
    description: 'PC laptops, MacBooks, Chromebooks, Gaming laptops, Microsoft Surface, Laptop accessories, iPads'
  },
  {
    name: 'BACKPACKS',
    displayName: 'BACKPACKS',
    description: 'Upgrade your entertainment space with a larger screen that makes viewing experiences more immersive'
  },
  {
    name: 'TENTS',
    displayName: 'TENTS',
    description: 'Find the DSLR, point-and-shoot or mirrorless camera that\'s perfect for any shot, any location, any event'
  }
];

export default function categoriesReducer(state = initialState, action) {

  switch (action.type) {

    case 'GET_CATEGORIES':
      return action.payload.results

    default:
      return state;
  }
}


export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get('https://mdnh-virtual-store-api.herokuapp.com/api/v1/categories');

  dispatch(setCategories(response.data))
}

export const setCategories = (data) => {
  return {
    type: 'GET_CATEGORIES',
    payload: data,
  }
}