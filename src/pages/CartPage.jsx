import React from "react";
import { connect } from "react-redux";
import CartItem from "./../components/CartItem";

import numberOfProductsInCartSelector from "../selectors/numberOfProductsInCart";
import totalPriceSelector from "../selectors/totalPrice";

function getProductById(products, id) {
  return products.find(product => product.id === id);
}

export class CartPage extends React.Component {
  render() {
    const { cartItems, productsQuantity, totalPrice } = this.props;
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Cart</h1>
              <p>
                You have {productsQuantity} products in your cart. The total
                price is
                {" $"}
                {totalPrice}
              </p>
              {cartItems.map(item => (
                <CartItem
                  key={item.product.id}
                  product={item.product}
                  quantity={item.quantity}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapState = ({ cart }) => ({
  cartItems: cart.items,
  productsQuantity: numberOfProductsInCartSelector(cart),
  totalPrice: totalPriceSelector(cart)
});

export default connect(mapState)(CartPage);
