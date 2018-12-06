import React from "react";
import { connect } from "react-redux";

class ProductsPage extends React.Component {
  componentDidMount() {
    this.props.loadAll();
  }

  render() {
    return <h1>Products</h1>;
  }
}

const mapState = state => ({
  products: state.products.list
});

const mapDispatch = ({ products: { loadAll } }) => ({
  loadAll
});

export default connect(
  mapState,
  mapDispatch
)(ProductsPage);
