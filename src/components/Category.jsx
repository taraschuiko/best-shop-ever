import React from "react";
import { Link } from "react-router-dom";

export default function({ category }) {
  return (
    <div>
      <li>
        <Link to={`/categories/${category.id}`}> {category.name} </Link>
      </li>
    </div>
  );
}
