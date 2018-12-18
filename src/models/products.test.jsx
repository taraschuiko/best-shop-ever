import { createModel } from "./products";

describe("effect loadAll", () => {
  it("loads data and calls setList", async () => {
    const productsList = [{ name: "x" }];
    const loadProducts = () => Promise.resolve(productsList);

    const setListMock = jest.fn();

    const model = createModel(loadProducts);

    await model.effects(/* dispatch */).loadAll.call({
      setList: setListMock
    });

    expect(setListMock).toBeCalled();
    expect(setListMock).toBeCalledWith(productsList);
  });
});
