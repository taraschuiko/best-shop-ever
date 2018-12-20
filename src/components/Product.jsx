import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export function Product({ product, category, addProductToCart }) {
  return (
    <div className="col-12 col-sm-6 col-md-3 product-card">
      <Link to={`/products/${product.id}`}>
        <div>
          <img src={product.image} alt="Product" />
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>
      </Link>
      <button onClick={addProductToCart}>Add to cart</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addProductToCart: () => dispatch.cart.addProduct(ownProps.product)
});
export default connect(
  null,
  mapDispatchToProps
)(Product);
