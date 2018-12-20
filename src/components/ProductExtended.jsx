import React from "react";

export default function({ product }) {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img
              src={product.image}
              alt="Image"
              className="product-extended-image"
            />
          </div>
          <div className="col-9">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
