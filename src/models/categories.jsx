import { loadCategories } from "../libs/api";

function createModel(loadCategories) {
  return {
    state: {
      list: []
    },
    reducers: {
      setList(state, list) {
        state.list = list;
      }
    },
    effects: dispatch => ({
      async loadAll(payload, rootState) {
        const categories = await loadCategories();
        this.setList(categories);
      }
    })
  };
}

export { createModel };
export default createModel(loadCategories);
