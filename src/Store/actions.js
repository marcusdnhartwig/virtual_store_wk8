
export const selectedCategory = (categories) => {
  return {
    type: 'ACTIVE_CATEGORY',
    payload: categories,
  }
}

export const addToCart = (products) => {
  return {
    type: 'ADD_CART',
    payload: products,
  }
}

export const removeFromCart = (products) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: products,
  }
}