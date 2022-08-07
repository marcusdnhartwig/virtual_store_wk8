
const initialState = ''

export default function activeCategoryReducer(state = initialState, action) {

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