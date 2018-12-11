import React from "react";

export default function({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>{product.price}</h3>
    </div>
  );
}
