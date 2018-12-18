import React, { Component } from "react";
import "./App.css";

import store from "./store";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <header>
              <div className="container">
                <div className="row">
                  <Link to="/" className="col-12 col-sm-3">
                    <img
                      src="../../data/img/logo.png"
                      alt="Shop"
                      className="header-logo"
                    />
                  </Link>
                </div>
              </div>
            </header>
            <Switch>
              <Route path="/cart" component={CartPage} />
              <Route path="/products/:id" component={ProductPage} />
              <Route path="/categories/:id" component={ProductsPage} />
              <Route exact path="/" component={ProductsPage} />
            </Switch>
            <footer>
              <div className="container">
                <div className="row">
                  <p className="col-12">&copy; 2018</p>
                </div>
              </div>
            </footer>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
