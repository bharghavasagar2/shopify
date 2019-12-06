export default (state = [], action) => {
  console.log("state", state);
  console.log("action.payload", action.payload);
  switch (action.type) {
    case "ADD_CART":
      return [...state, action.payload];
    case "REMOVE_CART":
      return state.filter(cartItem => {
        return cartItem !== action.payload;
      });

    default:
      return state;
  }
};
