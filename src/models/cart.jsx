export default {
  state: {
    products: []
  },
  reducers: {
    addProduct(state, productId) {
      const product = state.products.find(
        product => product.productId === productId
      );
      if (product) {
        product.quantity += 1;
      } else {
        state.products.push({ productId, quantity: 1 });
      }
    },
    removeProduct(state, productId) {
      state.products = state.products.filter(
        product => product.productId !== productId
      );
    },
    setQuantity(state, productId, quantity) {
      let product = state.products.find(product => product.id === productId);
      product.quantity = quantity;
    }
  }
};
