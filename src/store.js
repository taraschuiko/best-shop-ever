import immerPlugin from "@rematch/immer";
import { init } from "@rematch/core";

import models from "./models";

import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage
} from "./models/cart";

const logger = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

const store = init({
  models,
  plugins: [immerPlugin()],
  redux: {
    initialState: {
      // cart: loadStateFromLocalStorage()
    },
    middlewares: [logger]
  }
});

store.subscribe(() => {
  saveStateToLocalStorage(store);
});

window.store = store;

export default store;
