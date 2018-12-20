import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export function CartItem({ product, quantity, addOne, removeOne, remove }) {
  return (
    <div className="cartItem">
      <Link to={`/products/${product.id}`}>{product.name}</Link>
      <button onClick={removeOne}>-</button>
      {quantity}
      <button onClick={addOne}>+</button>
      <button onClick={remove}>x</button>
    </div>
  );
}

const mapDispatch = ({ cart }, { quantity, product }) => ({
  addOne: () => cart.setQuantity(product.id, quantity + 1),
  removeOne: () => cart.setQuantity(product.id, quantity - 1),
  remove: () => cart.removeProduct(product.id)
});
export default connect(
  null,
  mapDispatch
)(CartItem);
