import React, { Component } from "react";
import "./App.css";

import store from "./store";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";

// Заповнити продукти і зробити розмітку для неї, загрузка категорій
// Редюсер до одного продукта

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
            <Route exact path="/" component={ProductsPage} />
            <Route path="/products/:id" component={ProductPage} />
            <Route path="/categories/:id" component={ProductsPage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
