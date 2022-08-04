// log the action in console
// using middleware in a fashion Redux likes

const logger = (store) => (next) => (action) => {

  console.log('__action__', action);
  return next(action);
};

export default logger;