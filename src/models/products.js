export default {
  state: {
    list: []
  },
  reducers: {
    setList(state, list) {
      state.list = list;
    }
  },
  effects: dispatch => ({
    loadAll(payload, rootStatex) {
      fetch("/data/products.json")
        .then(r => r.json())
        .then(data => console.log(data));
    }
  })
};
