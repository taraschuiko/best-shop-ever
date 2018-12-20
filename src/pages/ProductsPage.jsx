import React from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import Category from "../components/Category";
import CartButton from "../components/CartButton";
import categoryForProductSelector from "../selectors/categoryForProductSelector";

class ProductsPage extends React.Component {
  componentDidMount() {
    this.loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.url !== this.props.match.url) {
      this.loadData(nextProps);
    }
  }

  loadData(props) {
    let queryParams = {};
    if (props.match.path === "/categories/:id") {
      queryParams = { filter: { categoryId: props.match.params.id } };
    }
    props.loadProducts(queryParams);
    props.loadCategories();
  }

  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <CartButton />
          </div>
          <div className="row">
            <div className="col-12 col-lg-2">
              <h4>Categories</h4>
              <ul className="categories">
                {this.props.categories.map(category => (
                  <Category key={category.id} category={category} />
                ))}
              </ul>
            </div>
            <div className="col-12 col-lg-10">
              <h2>Products</h2>
              <div className="row">
                {this.props.products.map(product => (
                  <Product
                    key={product.id}
                    product={product}
                    category={categoryForProductSelector(
                      product,
                      this.props.categories
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
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
