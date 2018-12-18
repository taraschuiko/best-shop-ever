import React from "react";
import { connect } from "react-redux";
import numberOfProductsInCartSelector from "../selectors/numberOfProductsInCart";
import totalPriceSelector from "../selectors/totalPrice";
import { Link } from "react-router-dom";

export function CartButton({ productsQuantity, totalPrice }) {
  return (
    <Link to="/cart" className="cart-button col-12">
      You have {productsQuantity} products in your cart. The total price is
      {" $"}
      {totalPrice}
    </Link>
  );
}

const mapState = state => ({
  productsQuantity: numberOfProductsInCartSelector(state.cart),
  totalPrice: totalPriceSelector(state.cart, state.products.list)
});
export default connect(mapState)(CartButton);
