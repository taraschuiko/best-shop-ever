import immerPlugin from "@rematch/immer";
import { init } from "@rematch/core";

import models from "./models";

const store = init({
  models,
  plugins: [immerPlugin()]
});

window.store = store;

export default store;
