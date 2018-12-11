import React from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import Category from "../components/Category";

class ProductsPage extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
    this.props.loadCategories();
  }

  render() {
    return (
      <div>
        <h1>Categories</h1>
        {this.props.categories.map(category => (
          <Category key={category.id} category={category} />
        ))}
        <h1>Products</h1>
        {this.props.products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  }
}

const mapState = state => ({
  products: state.products.list,
  categories: state.categories.list
});

const mapDispatch = ({ products, categories }) => ({
  loadProducts: products.loadAll,
  loadCategories: categories.loadAll
});

export default connect(
  mapState,
  mapDispatch
)(ProductsPage);
