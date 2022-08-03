const initialState = {
  categories: [
    {
      name: 'Maps',
      displayName: 'Maps', 
      description: 'USGS & Land Survey Maps'
    },
    {
      name: 'Tents',
      displayName: 'Tents',
      description: 'Big Agnes, HLMG, NERO, Mountain Hardware'
    },
    {
      name: 'Backpacks', 
      displayName: 'Backpacks', 
      description: 'Osprey, Mountain Smith, Arctryx, Deutur'
    }
  ],
  activeCategory: '',
}

function categoryReducer(state = initialState, action) {

  let { type, payload } = action;
  switch (type) {
    case 'ACTIVE_CATEGORY':
      return {
        ...state,
        activeCategory: payload
      }

    default:
      return state
  }
}

//action creater
export const selectedCategory = (categories) => {
  return {
    type: 'ACTIVE_CATEGORY',
    payload: categories,
  }
}

export default categoryReducer;