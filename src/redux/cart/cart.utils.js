// adding multiple items to cart via quantity value within our cartItems array
export const addItemToCart = (cartItems, cartItemToAdd) => {
  // look inside our existing cart items to  see if item exists
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  ); // returns a boolean value

  if (existingCartItem) {
    // return new array
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // if cart item not found, return new array with previous existing items and new object
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
