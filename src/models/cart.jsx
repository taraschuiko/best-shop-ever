// export default {
//   state: {
//     products: []
//   },
//   reducers: {
//     addProduct(state, productId) {
//       const product = state.products.find(
//         product => product.productId === productId
//       );
//       if (product) {
//         product.quantity += 1;
//       } else {
//         state.products.push({ productId, quantity: 1 });
//       }
//     },
//     removeProduct(state, productId) {
//       state.products = state.products.filter(
//         product => product.productId !== productId
//       );
//     },
//     setQuantity(state, productId, quantity) {
//       let product = state.products.find(product => product.id === productId);
//       product.quantity = quantity;
//     }
//   }
// };

// const STORAGE_KEY = "cart";

// export function loadStateFromLocalStorage() {
//   let storageData = localStorage.getItem(STORAGE_KEY);
//   return JSON.parse(storageData) || { items: [] };
// }

// export function saveStateToLocalStorage(store) {
//   const cartState = store.getState().cart;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(cartState));
// }

const cart = {
  state: {
    items: []
  },
  reducers: {
    addProduct(state, product) {
      const item = state.items.find(item => item.product.id === product.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({
          product: product,
          quantity: 1
        });
      }
    },
    removeProduct(state, productId) {
      state.items = state.items.filter(item => item.product.id !== productId);
    },
    setQuantity(state, productId, quantity) {
      if (quantity === 0) {
        state.items = state.items.filter(item => item.product.id !== productId);
      } else {
        const item = state.items.find(item => item.product.id === productId);
        item.quantity = quantity;
      }
    }
  }
};

export default cart;

const STORAGE_KEY = "cart";

export function loadStateFromLocalStorage() {
  const storageData = localStorage.getItem(STORAGE_KEY);
  return JSON.parse(storageData) || cart.state;
}

export function saveStateToLocalStorage(store) {
  const cartState = store.getState().cart;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cartState));
}
