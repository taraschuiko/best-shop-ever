import React, { Component } from "react";
import "./App.css";

import store from "./store";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                <Link to="/products/1">Product 1</Link>
              </li>
            </ul>
            <Route exact path="/" component={ProductsPage} />
            <Route path="/products/:id" component={ProductPage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
