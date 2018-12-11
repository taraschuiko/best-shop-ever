import React from "react";
import { connect } from "react-redux";
import ProductExtended from "../components/ProductExtended";

class ProductPage extends React.Component {
  componentDidMount() {
    this.props.loadOne(this.props.match.params.id);
  }

  render() {
    return this.props.product ? (
      <ProductExtended product={this.props.product} />
    ) : (
      <p>Warning</p>
    );
  }
}

const mapState = (state, props) => ({
  product: state.products.list.find(
    product => product.id === props.match.params.id
  ),
  productId: props.match.params.id
});

const mapDispatch = ({ products: { loadOne } }) => ({
  loadOne
});

export default connect(
  mapState,
  mapDispatch
)(ProductPage);
