import React from "react";
import { connect } from "react-redux";

function getProductById(products, id) {
  return products.find(product => product.id === id);
}

// function CartItem(product, quantity) {
//   return <div />;
// }

export class CartPage extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
  }
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Cart</h1>
              {this.props.cartItems.map(item => (
                <div key={item.productId}>
                  {getProductById(this.props.products, item.productId).name}
                  {" - "}
                  {item.quantity}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapState = state => ({
  products: state.products.list,
  cartItems: state.cart.products
});

const mapDispatch = ({ products }) => ({
  loadProducts: products.loadAll
});

export default connect(
  mapState,
  mapDispatch
)(CartPage);
